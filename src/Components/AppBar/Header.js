import DesktopHeader from "./DesktopHeader/DesktopHeader";
import "./_Header.scss";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <DesktopHeader />
      </div>
    </header>
  );
}
