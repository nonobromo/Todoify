import Form from "./components/form";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Todos from "./components/todos";

function App() {
  return (
    <div className="d-flex min-vh-100 flex-column mobile-mode">
      <Header />
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/form" element={<Form />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
