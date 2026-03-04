import { NavLink } from "react-router-dom";
import { navLinks } from "./data/nav-links.data";

export const Sidebar = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <hr />
    </nav>
  )
}
