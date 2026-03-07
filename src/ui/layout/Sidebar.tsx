import { NavLink } from "react-router-dom";
import { sidebarLinks } from "./data/nav-links.data";
import { svgsData } from "../../shared/data/svgs.data";

export const Sidebar = () => {
  return (
    <div>
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
      </nav>
        <hr />
      <nav>
        <ul>
          {svgsData.map((link) => (
            <li key={link.id}>
              <NavLink to={`/category/${link.id}`}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
