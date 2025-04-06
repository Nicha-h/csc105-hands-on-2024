import { serve } from '@hono/node-server'
import { Hono} from 'hono'
import { logger } from 'hono/logger';
import type { Variables, Todo } from './types/index.ts';
import { todos } from './models/todo.models.ts';
import todoRoutes from './routes/todo.routes.ts';

const app = new Hono<{ Variables: Variables }>();

app.use('*', logger());

app.get('/', (c) => {
  return c.text('Hello Hono!');
});
app.route('todos',todoRoutes); //everything start with todo/ will go to the router
serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
export { todos };

