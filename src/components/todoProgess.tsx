import { useState } from "react";
import { useCategoryState } from "../context/categoryState-context";
import { useTodos } from "../context/todosState-contex";
import Select from "./common/select";

export const categories = [
  "All",
  "Home",
  "Work",
  "Shopping",
  "Outdoor",
  "Other",
];
function TodoProgress() {
  const { todos } = useTodos();
  const { setCurrentCategory } = useCategoryState();

  const completeTodos = todos.filter((todo) => todo.complete === true);
  return (
    <div className="d-flex flex-column gap-3">
      {todos.length === 0 || (
        <span>
          tasks completed: {completeTodos.length} /{todos.length}
        </span>
      )}
      {todos.length > 0 && (
        <form>
          <Select
            selectIems={categories}
            id="ctg-select"
            name="ctg-select"
            label="Filter By"
            onChange={(e) => {
              setCurrentCategory(e.target.value);
            }}
          />
        </form>
      )}
    </div>
  );
}

export default TodoProgress;
