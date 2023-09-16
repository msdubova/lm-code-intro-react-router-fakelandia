import { NavLink } from "react-router-dom";
const Nav: React.FC = () => (
  <nav className="nav">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Confession">Confession</NavLink>
    <NavLink to="/Misdemeanour">Misdemeanour</NavLink>
  </nav>
);
export default Nav;
