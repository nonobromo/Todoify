import { useTodos } from "../context/todosState-contex";
import Todo from "./common/todo";
import NoTodos from "./noTodos";
import TodoProgress from "./todoProgess";

function TodoList() {
  const { todos } = useTodos();
  return (
    <div
      className="container d-flex justify-content-center auto flex-wrap gap-5 p-5"
      style={{ maxHeight: "300px" }}>
      <TodoProgress />
      {todos.length === 0 ? (
        <NoTodos />
      ) : (
        todos.map((todo) => {
          return (
            <>
              <div className="container d-flex justify-content-center auto flex-wrap gap-5 p-5">
                <Todo todo={todo} key={todo.id} />
              </div>
            </>
          );
        })
      )}
    </div>
  );
}

export default TodoList;
