import { useTodos } from "../context/todosState-contex";
import NoTodos from "./noTodos";
import TodoList from "./todoList";

function TodoShowcase() {
  const { todos } = useTodos();
  return (
    <div className="container">
      {todos.length === 0 ? <NoTodos /> : <TodoList />}
    </div>
  );
}

export default TodoShowcase;
