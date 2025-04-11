import { useCategoryState } from "../context/categoryState-context";
import { useTodos } from "../context/todosState-contex";
import Todo from "./common/todo";

function TodoList() {
  const { todos } = useTodos();
  const { currentCategory } = useCategoryState();
  const filtredTodos = todos.filter((todo) =>
    currentCategory === "All" ? todos : todo.category === currentCategory
  );
  return (
    <div className="container d-flex justify-content-center auto flex-wrap gap-5">
      {filtredTodos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default TodoList;
