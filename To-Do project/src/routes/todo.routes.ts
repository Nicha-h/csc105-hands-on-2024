import { Hono } from 'hono';
import * as TodoController from '../controllers/todo.controllers.ts';
import { validateCreateTodo, validateIdParam, validatePatchTodo, validateUpdateTodo } from '../middlewares/Validators.ts';


const todoRoutes = new Hono();

// Define routes
todoRoutes.get('/', TodoController.getTodos);
todoRoutes.get('/search', TodoController.searchTodos);
todoRoutes.get('/:id', validateIdParam, TodoController.getTodo);
todoRoutes.post('/', validateCreateTodo, TodoController.createNewTodo);
todoRoutes.put('/:id', validateIdParam, validateUpdateTodo, TodoController.updateTodo);
todoRoutes.patch('/:id', validateIdParam, validatePatchTodo, TodoController.patchTodo);
todoRoutes.delete('/:id', validateIdParam, TodoController.deleteTodo);

export default todoRoutes;