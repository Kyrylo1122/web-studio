import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="App-header">
        <ul>
          <li>
            <NavLink to="/">Studio</NavLink>
          </li>
          <li>
            <NavLink to="portfolio">Portfolio</NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
}
