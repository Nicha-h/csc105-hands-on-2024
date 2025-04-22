import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";
import { db } from "../index.ts";

type createTodoBody = {
    title: string;
    userId: number;
};

export const createTodo = async (c: Context) => {
    try {
        const body = await c.req.json<createTodoBody>();
        if (!body.title || !body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newTodo = await todoModel.createTodo(body.title, body.userId);
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
                msg: `${e}`,
            },
            500
        );
    }
}
export const getTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.getTodo(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

export const completeTodo = async (c: any) => {
    const id = Number(c.req.param("id"));
    const updated = await db.todo.update({
      where: { id },
      data: { completed: true },
    });
    return c.json(updated);
};
  
export const updateTodoTitle = async (c: any) => {
    const id = Number(c.req.param("id"));
    const { title } = await c.req.json();
    const updated = await db.todo.update({
      where: { id },
      data: { title },
    });
    return c.json(updated);
};
  
export const getTodosOfUser = async (c: any) => {
    const userId = Number(c.req.param("id"));
    const todos = await db.todo.findMany({
      where: { userId },
    });
    return c.json(todos);
};

export const deleteTodo = async (c: Context) => {
    try {
        const query = c.req.query("id");
        if (query !== undefined && query !== null) {
            const data = await todoModel.deleteTodo(parseInt(query));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}