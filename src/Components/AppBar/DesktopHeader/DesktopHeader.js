import Logo from "../../Logo/Logo";
import Contacts from "../Contacts/Contacts";
import Navigation from "../Navigation/Navigation";
export default function DesktopHeader() {
  return (
    <div className="header__container">
      <Logo />
      <Navigation />
      <Contacts />
    </div>
  );
}
