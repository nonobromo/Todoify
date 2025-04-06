import Header from "./components/header";

import { useTodos } from "./context/todosState-contex";

import Form from "./components/form";

import NoTodos from "./components/noTodos";
import TodoList from "./components/todoList";

function App() {
  const { todos } = useTodos();
  const completeTodos = todos.filter((todo) => todo.complete === true);

  return (
    <div className="d-flex min-vh-100 flex-column mobile-mode">
      <Header />
      <div className="d-flex flex-column justify-center">
        <div className="container mt-5">
          <h1>Welcome to Todoify</h1>
          <h2 className="mt-4">Add your daily todos</h2>
        </div>

        <div className="container">
          <Form />

          {todos.length === 0 || (
            <span>
              You have completed {completeTodos.length} todos out of:{" "}
              {todos.length}
            </span>
          )}
        </div>
      </div>
      {todos.length === 0 ? <NoTodos /> : <TodoList />}
    </div>
  );
}

export default App;
