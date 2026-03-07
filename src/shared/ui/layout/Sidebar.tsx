import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../index";
import { svgsData } from "../../index";

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
                {link.tec}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
