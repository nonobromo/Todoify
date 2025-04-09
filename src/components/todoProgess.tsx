import { useTodos } from "../context/todosState-contex";
import Select from "./common/select";

function TodoProgress() {
  const { todos } = useTodos();
  const completeTodos = todos.filter((todo) => todo.complete === true);
  return (
    <div className="d-flex flex-column gap-2">
      {todos.length === 0 || (
        <span>
          tasks completed: {completeTodos.length} /{todos.length}
        </span>
      )}
      <Select id="ctg-select" name="ctg-select" label="Filter By" />
    </div>
  );
}

export default TodoProgress;
