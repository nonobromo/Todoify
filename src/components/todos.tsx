import TodoProgress from "./todoProgess";
import TodoShowcase from "./todoShowcase";

function Todos() {
  return (
    <div
      className="container mt-5 d-flex align-items-center flex-column gap-5"
      style={{ maxHeight: "300px" }}
    >
      <h1>View your todos</h1>
      <TodoProgress />
      <TodoShowcase />
    </div>
  );
}

export default Todos;
