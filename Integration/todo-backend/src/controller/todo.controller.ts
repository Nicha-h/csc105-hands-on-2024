import type { Context } from "hono";
import * as todoModel from "../model/todo.model.ts";

const GetTodo = async (c: Context) => {
  try {
    const param = c.req.query("id");
    {
      const todos = await todoModel.GetTodo(); 
      return c.json({
        success: true,
        data: todos,
        msg: "Fetched all todos",
      });
    }
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
  }
};

const AddTodo = async (c: Context) => {
  try {
    const body = await c.req.json(); 
    const newTodo = await todoModel.AddTodo(body.title);
    return c.json({
      success: true,
      data: newTodo,
      msg: "Created new Todo!",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
  }
};

const EditTodoName = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { id, title } = body;
    const updatedTodo = await todoModel.EditTodo(id, title);
    return c.json({
      success: true,
      data: updatedTodo,
      msg: "Todo updated!",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
  }
};

const CompleteTodo = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { id } = body;
    const completedTodo = await todoModel.SuccessTodo(id);
    return c.json({
      success: true,
      data: completedTodo,
      msg: "Todo marked as complete!",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
  }
};

const DeleteTodo = async (c: Context) => {
  try {
    const id = Number(c.req.param("id"));
    const deletedTodo = await todoModel.DeleteTodo(id);
    return c.json({
      success: true,
      data: deletedTodo,
      msg: "Todo deleted!",
    });
  } catch (e) {
    console.error("❌ Delete error:", e); 
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
  }
};


export { GetTodo, AddTodo, EditTodoName, CompleteTodo, DeleteTodo };
