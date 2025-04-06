import { useTodos } from "../context/todosState-contex";
import Todo from "./common/todo";

function TodoList() {
  const { todos } = useTodos();
  return (
    <div className="container d-flex flex-wrap gap-5 bg-light p-5 mt-5">
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default TodoList;
