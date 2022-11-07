import { NavLink } from "react-router-dom";
import { HeaderNavNames } from "../../HeaderNavNames";

const navContent = [
  { id: 1, text: HeaderNavNames.STUDIO },
  { id: 2, text: HeaderNavNames.PORTFOLIO },
];
export default function NavigationList({ closeMenu }) {
  return (
    <ul className="navigation__list">
      {navContent.map(({ id, text }) => {
        return (
          <li key={id} className="navigation__item">
            <NavLink
              to={text}
              className="navigation__link"
              // onClick={() => closeMenu()}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
