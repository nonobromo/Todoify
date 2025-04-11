import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.tsx";
import "./App.css";
import { TodoProvider } from "./context/todosState-contex.tsx";
import { BrowserRouter } from "react-router-dom";
import { CategoriesStateContext } from "./context/categoryState-context.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <CategoriesStateContext>
          <App />
        </CategoriesStateContext>
      </TodoProvider>
    </BrowserRouter>
  </StrictMode>
);
