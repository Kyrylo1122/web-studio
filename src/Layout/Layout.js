import { NavLink, Outlet } from "react-router-dom";
import { HeaderNavNames } from "./HeaderNavNames";
const navContent = [
  { id: 1, text: HeaderNavNames.STUDIO },
  { id: 2, text: HeaderNavNames.PORTFOLIO },
];
export default function Layout() {
  return (
    <>
      <header className="App-header">
        <ul className="navigation__list">
          {navContent.map(({ id, text }) => {
            console.log(text);
            return (
              <li key={id} className="navigation__item">
                <NavLink to={text}>{text}</NavLink>
              </li>
            );
          })}
        </ul>
      </header>
      <Outlet />
    </>
  );
}
