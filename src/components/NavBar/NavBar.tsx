import { NavLink } from "react-router-dom";
import { TABS } from "../../../constants";

import "./NavBar.css";
export const NavBar: React.FC = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-ul">
          {TABS.map((tab) => (
            <li key={tab}>
              <NavLink
                to={"/".concat(tab.toLowerCase())}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <span className="hidden">[</span>
                {tab}
                <span className="hidden">]</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
