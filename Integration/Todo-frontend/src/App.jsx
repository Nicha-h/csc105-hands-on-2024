import { useEffect, useState } from 'react';
import { getTodoAPI, addTodoAPI, deleteTodoAPI, updateTodoAPI, completeTodoAPI } from './api/getTodo';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    handleFetchTodoData();
  }, []);

  async function handleAddTodo() {
    const newTodoName = input.trim();
    if (!newTodoName) {
      alert('Please enter a valid todo name.');
      return;
    }
    const res = await addTodoAPI(newTodoName);
    if (res.success) {
      setTodos((prevTodos) => [...prevTodos, res.data]);
      setInput('');
    }
  }

const handleDeleteTodo = async (id) => {
    console.log('Deleting todo with ID:', id);
    const resp = await deleteTodoAPI(id);
    if (resp.success) {
      setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    } else {
      alert("Failed to delete todo.");
    }
};
  

const handleToggleComplete = async (id) => {
  const resp = await completeTodoAPI(id);
  
  if (resp.success) {
  
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  } else {
    alert('Failed to update completion status.');
  }
};




  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index].name); 
  };

  const handleUpdateTodo = async (id) => {
    const newTitle = editText.trim();
    if (!newTitle) {
      alert('Please enter a valid task name.');
      return;
    }

    const resp = await updateTodoAPI(id, newTitle);
    if (resp.success) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, name: newTitle } : todo 
        )
      );
      setEditIndex(null);
    } else {
      alert('Failed to update task.');
    }
  };

  async function handleFetchTodoData() {
    const resp = await getTodoAPI();
    if (resp.success && resp.data != null) {
      setTodos(resp.data);
    }
  }

  const cancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-teal-200 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-amber-600">Todo List</h1>

        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Add a new task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleAddTodo();
            }}
          />
          <button
            onClick={handleAddTodo}
            className="bg-amber-400 px-4 rounded-r-lg hover:bg-amber-500 transition-colors"
          >
            Add
          </button>
        </div>

        {todos.length === 0 ? (
          <div className="text-center py-4 text-gray-500">No tasks yet. Add one above!</div>
        ) : (
          <ul className="space-y-2 mt-4">
            {todos.map((todo, index) => (
              <li
                key={index}
                className={`rounded-lg border ${todo.completed ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}
              >
                {editIndex === index ? (
                  <div className="flex p-2">
                    <input
                      type="text"
                      className="flex-1 p-1 border rounded mr-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleUpdateTodo(todo.id); 
                        if (e.key === 'Escape') cancelEdit();
                      }}
                      autoFocus
                    />
                    <button
                      onClick={() => handleUpdateTodo(todo.id)} 
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-1 text-sm hover:bg-blue-600 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-gray-300 px-2 py-1 rounded text-sm hover:bg-gray-400 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-between items-center p-3">
                    <div className="flex items-center flex-1">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggleComplete(todo.id)} 
                        className="mr-3 h-4 w-4"
                      />
                      <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
                        {todo.name} 
                      </span>
                    </div>
                    <div className="flex">
                      <button
                        onClick={() => startEdit(index)}
                        className="text-blue-500 hover:text-blue-700 mx-2 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteTodo(todo.id)} 
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 text-sm text-gray-500 text-center">
          {todos.length > 0 && `${todos.filter((t) => t.completed).length} of ${todos.length} tasks completed`}
        </div>
      </div>
    </div>
  );
}

export default App;
