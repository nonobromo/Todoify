import React, { createContext, ReactNode, useContext, useReducer } from "react";
export type TodoCategory =
  | "Work"
  | "Outdoor"
  | "Home"
  | "Shopping"
  | "Other"
  | null;

export type Todo = {
  id: string;
  title: string;
  description: string;
  complete: boolean;
  category: TodoCategory;
  date: string;
};

type Action =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "REMOVE_TODO"; payload: { id: string } }
  | {
      type: "EDIT_TODO";
      payload: { id: string; title: string; description: string };
    }
  | { type: "COMPLETE_TODO"; payload: { id: string } };

const initialState: Todo[] = [];

function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              title: action.payload.title,
              description: action.payload.description,
            }
          : todo
      );
    case "COMPLETE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    default:
      return state;
  }
}

const TodoContext = createContext<
  { todos: Todo[]; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};
