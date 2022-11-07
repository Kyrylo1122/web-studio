import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MobileHeader from "./MobileHeader/MobileHeader";
import "./_Header.scss";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <DesktopHeader />
        <MobileHeader />
      </div>
    </header>
  );
}
