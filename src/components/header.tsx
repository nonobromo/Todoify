import { Link, NavLink } from "react-router-dom";
import Icon from "./common/icon";

function Header() {
  return (
    <div className="container-fluid text-white py-2 px-0 bg-body-secondary d-flex align-items-center">
      <div className="container-sm d-flex justify-content-between align-items-center px-3">
        <Link to="/" className="navbar-brand">
          <Icon />
        </Link>
        <ul
          className="d-flex gap-4 align-items-center m-0"
          style={{ listStyleType: "none" }}
        >
          <NavLink to="/todos">
            <li className="text-black">My Todos</li>
          </NavLink>
          <NavLink to="/form">
            <li className="text-black">Create Todo</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
