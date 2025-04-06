type Variables = {
  id: number
};

type Todo = {
  id: number;
  title: string;
  completed?: boolean;
}

export type CreateTodoInput = {
	title: string;
	completed?: boolean;
};

export type UpdateTodoInput = {
	title?: string;
	completed?: boolean;
};

export type {Variables, Todo};