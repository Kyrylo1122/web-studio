import Logo from "../../Logo/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import "./_MobileHeader.scss";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="mob-header">
      <Logo />
      <button type="button" className="btn-menu " onClick={() => openMenu()}>
        <GiHamburgerMenu />
      </button>
      {isOpen && <MobileMenu closeMenu={closeMenu} />}
    </div>
  );
}
