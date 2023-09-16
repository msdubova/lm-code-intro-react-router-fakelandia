import { NavLink } from "react-router-dom";
const Nav: React.FC = () => (
  <nav className="nav">
    <NavLink
      to="/"
      style={({ isActive }) =>
        isActive ? { color: "red" } : { color: "black" }
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/Confession"
      style={({ isActive }) =>
        isActive ? { color: "red" } : { color: "black" }
      }
    >
      Confession
    </NavLink>
    <NavLink
      to="/Misdemeanours"
      style={({ isActive }) =>
        isActive ? { color: "red" } : { color: "black" }
      }
    >
      Misdemeanours
    </NavLink>
  </nav>
);
export default Nav;
