import { Link, NavLink } from "react-router-dom";
import Icon from "./common/icon";

function Header() {
  return (
    <div
      className="container-fluid py-2 px-0 d-flex align-items-center"
      style={{ backgroundColor: "#FFB200" }}>
      <div className="container-sm d-flex justify-content-between align-items-center px-3">
        <Link to="/" className="navbar-brand">
          <Icon />
        </Link>
        <ul
          className="d-flex gap-4 align-items-center m-0"
          style={{ listStyleType: "none" }}>
          <li className="nav-item">
            <NavLink
              to="/todos"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }>
              My Todos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/form" className="nav-link">
              Create Todo
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
