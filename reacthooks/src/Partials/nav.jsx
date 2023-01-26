import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/form">Form</NavLink>
        </li>
        <li>
          <NavLink to="/goals">17 Goals</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
