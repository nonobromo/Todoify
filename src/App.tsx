import Form from "./components/form";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import TodoList from "./components/todoList";

function App() {
  return (
    <div className="d-flex min-vh-100 flex-column mobile-mode bg-dark-subtle">
      <Header />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/form" element={<Form />} />
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
