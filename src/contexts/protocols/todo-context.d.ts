import { ReactNode } from 'react';

export type TodoItem = {
  id: string;
  name: string;
};

export type ContextProps = {
  items: TodoItem[];
  handleAddTodo(todoName: string): void;
  handleUpdateTodo(todo: TodoItem): void;
};

export type ProviderProps = {
  children: ReactNode;
};
