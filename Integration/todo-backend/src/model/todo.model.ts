import { db } from "../index.ts";

const GetTodo = async () => {
  const todos = await db.todo.findMany(); 
  return todos;
};

const AddTodo = async (newTodoName: string) => {
  const todo = await db.todo.create({
    data: {
      name: newTodoName,
      success: false,
    },
  });

  return todo;
};


const EditTodo = async (todoId: number, editTodoName: string) => {
  const updated = await db.todo.update({
    where: { id: todoId }, 
    data: { name: editTodoName }, 
  });
  return updated;
};

const SuccessTodo = async (todoId: number) => {
  const succ = await db.todo.update({
    where: { id: todoId },
    data: { success: true }, 
  });
  return succ;
};

const DeleteTodo = async (todoId: number) => {
  const todo = await db.todo.delete({
    where: {
      id: todoId,
    },
  });
  return todo;
};

export { GetTodo, AddTodo, EditTodo, SuccessTodo, DeleteTodo };
