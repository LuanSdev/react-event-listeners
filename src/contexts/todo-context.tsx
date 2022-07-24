import { createContext, useState } from 'react';

import {
  ContextProps,
  ProviderProps,
  TodoItem,
} from './protocols/todo-context';

export const TODO_CONTEXT = createContext({} as ContextProps);

export function TodoProvider({ children }: ProviderProps) {
  const [items, setItems] = useState<TodoItem[]>([]);

  function handleAddTodo(todoName: string) {
    if (!todoName) return;

    const newTodo = {
      name: todoName,
      id: Math.random().toString(),
    };

    setItems((old) => [...old, newTodo]);
  }

  function handleUpdateTodo(updatedTodo: TodoItem) {
    const updatedItems = items.map((item) => {
      const update = item.id === updatedTodo.id;

      return update ? updatedTodo : item;
    });

    setItems(updatedItems);
  }

  return (
    <TODO_CONTEXT.Provider
      value={{
        items,
        handleAddTodo,
        handleUpdateTodo,
      }}
    >
      {children}
    </TODO_CONTEXT.Provider>
  );
}
