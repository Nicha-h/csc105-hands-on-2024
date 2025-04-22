import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { PrismaClient } from './generated/prisma/index.js'
import { error } from 'console';
import { mainRouter } from './routes/index.route.ts';
import { userRouter } from './routes/user.route.ts';
import { todoRouter } from './routes/todo.route.ts';

const app = new Hono()
export const db = new PrismaClient();

app.route("", mainRouter);
app.route("/users", userRouter);
app.route("/todos", todoRouter);

db.$connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error: any) => {
    console.error("Error connecting to the database", error)
})


serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

