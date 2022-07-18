export type Todo = {
  id: string;
  text: string;
};

export type Todos = {
  inProgress: Todo[];
  completed: Todo[];
};
