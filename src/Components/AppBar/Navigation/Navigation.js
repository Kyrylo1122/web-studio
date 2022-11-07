import "./_Navigation.scss";
import Logo from "../../Logo/Logo";
import NavigationList from "./NavigatinList/NavigationList";

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <Logo />
      </div>
      <NavigationList />
    </nav>
  );
}
