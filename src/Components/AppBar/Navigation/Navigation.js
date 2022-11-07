import { NavLink } from "react-router-dom";
import { HeaderNavNames } from "../HeaderNavNames";
import "./_Navigation.scss";

const navContent = [
  { id: 1, text: HeaderNavNames.STUDIO },
  { id: 2, text: HeaderNavNames.PORTFOLIO },
];

export default function Navigation({ closeMenu }) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navContent.map(({ id, text }) => {
          return (
            <li key={id} className="navigation__item">
              <NavLink
                to="studio"
                className="navigation__link"
                onClick={() => closeMenu()}
              >
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>{" "}
    </nav>
  );
}
// text === HeaderNavNames.STUDIO ? "/" :
