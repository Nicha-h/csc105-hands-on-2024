import type { Context } from "hono";
import {todos} from '../index.ts';
import type {CreateTodoInput, Todo, UpdateTodoInput } from '../types/index.ts';
import * as TodoModel from "../models/todo.models.ts";

export async function getTodos(c: Context) {
	// Check for query parameters
	const completed = c.req.query('completed');

	let todos;
	if (completed === 'true') {
		todos = TodoModel.findByCompleted(true);
	} else if (completed === 'false') {
		todos = TodoModel.findByCompleted(false);
	} else {
		todos = TodoModel.findAll();
	}

	return c.json(todos);
}

export async function getTodo(c: Context) {
  try {
      const id = parseInt(c.req.param('id'));
      
      if (isNaN(id)) {
          return c.json({
              success: false,
              msg: 'Invalid ID format',
          }, 400);
      }

      const todo = TodoModel.findById(id);
      
      if (todo) {
          return c.json({
              success: true,
              data: todo,
              msg: 'Todo Found!',
          });
      }
      
      return c.json({
          success: false,
          msg: 'Todo not found!',
      }, 404);
  } catch (e: any) {
      return c.json({
          success: false,
          msg: e.toString(),
      }, 500);
  }
}

export const getTodosCount = (c:Context) =>{
  const count = todos.length;
  return c.json({
    data: {count},
    msg: `Number of todos: ${count}`, 
  });
};

export const createNewTodo = async (c:Context) => {
  try {
      const body: CreateTodoInput = await c.req.json();
      if (!body.title) {
          return c.json({ success: false, msg: 'Missing required field' });
      }
      let lastMaxId: number = 0;
      // Find last Max ID
      todos.forEach((todo) => (lastMaxId = Math.max(lastMaxId, todo.id)));
      // Create new todo
      const newTodo: Todo = { id: lastMaxId + 1, title: body.title, completed: false };
      //push new todo in to todos list
      todos.push(newTodo);
      // return a success response
      return c.json({
          success: true,
          data: newTodo,
          msg: 'Done creating new todo',
      });
  } catch (e: any) {
      return c.json({
          success: false,
          msg: e.toString(),
      });
  }
};
export async function updateTodo(c: Context) {
	const id = parseInt(c.req.param('id'));
	const input = c.get('todoData') as Todo;

	const updatedTodo = TodoModel.update(id, input);

	if (!updatedTodo) {
		return c.json({ error: 'Todo not found' }, 404);
	}

	return c.json(updatedTodo);
}

export async function patchTodo(c: Context) {
	const id = parseInt(c.req.param('id'));
	const input = c.get('todoData') as UpdateTodoInput;

	const patchedTodo = TodoModel.patch(id, input);

	if (!patchedTodo) {
		return c.json({ error: 'Todo not found' }, 404);
	}

	return c.json(patchedTodo);
}

export const completeTodo = async (c:Context) => {
  try{
    const id = c.req.query('id');
    if(!id) { 
      return c.json("Missing required field");
    }
    if(!/^\d+$/.test(id)){
      return c.json("Invalid variable type");
    }

    todos.forEach((todo => {
      if(todo.id == parseInt(id)){todo.completed = true;}
    }));
      return c.json({success: true, msg: 'updated todo successfully'});
 
  } catch (e: any){
    return c.json({
      success: false,
      msg: e.toString(),
    });
  }
};


export async function deleteTodo(c: Context) {
    try{
      const idParam = c.req.param('id');
      if(!/^\d+$/.test(idParam)){return c.json("Id is not a number");}
      const id = parseInt(idParam);
      const index = todos.findIndex((todo) => todo.id == id);
      if(index == -1){
        return c.json({
          success: false,
          msg: 'todo not found',
        });
      }
  
      const selectedTodo = todos[index];
      todos.splice(index, 1);
  
      return c.json({
        success: true,
        data: selectedTodo,
        msg: 'successfully deleted todo',
      });
  
    } catch (e: any){
      return c.json({
        success: false,
        msg: e.toString(),
      })
    }
  };

export async function searchTodos(c: Context) {
  const term = c.req.query('q');
  
   if (!term) {
    return c.json({ error: 'Search term is required' }, 400);
  }
  
  const results = TodoModel.search(term);
  
  return c.json({
    results: results,
    count: results.length,
    term: term,
  });
}