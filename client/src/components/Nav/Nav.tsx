import { NavLink } from "react-router-dom";

const Nav: React.FC = () => (
  <nav className="nav">
    <NavLink
      className="navLink"
      to="/"
      style={({ isActive }) =>
        isActive ? { textDecoration: "underline" } : { color: "white" }
      }
    >
      Home
    </NavLink>
    <NavLink
      className="navLink"
      to="/Confession"
      style={({ isActive }) =>
        isActive ? { textDecoration: "underline" } : { color: "white" }
      }
    >
      Confession
    </NavLink>
    <NavLink
      className="navLink"
      to="/Misdemeanours"
      style={({ isActive }) =>
        isActive ? { textDecoration: "underline" } : { color: "white" }
      }
    >
      Misdemeanours
    </NavLink>
  </nav>
);
export default Nav;
