import { NavLink } from "react-router-dom";
import { sidebarLinks } from "./data/nav-links.data";

export const Sidebar = () => {
  return (
    <nav>
      <ul>
        {sidebarLinks.map((link) => (
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
