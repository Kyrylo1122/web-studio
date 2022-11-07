import { ImCross } from "react-icons/im";
import MobileContacts from "../MobileContacts/MobileContacts";
import "./_MobileMenu.scss";
import SocialsFullName from "../../../Socials/SocialsFullName/SocialsFullName";
import Navigation from "../../Navigation/Navigation";

export default function MobileMenu({ closeMenu }) {
  return (
    <div className="mob-menu">
      <div className="mob-menu--top">
        <button
          type="button"
          className="btn-menu btn-menu--close"
          onClick={() => {
            closeMenu();
          }}
        >
          <ImCross />
        </button>
        <Navigation closeMenu={closeMenu} />
      </div>
      <div className="mob-menu--bottom">
        <SocialsFullName />
        <MobileContacts />
      </div>
    </div>
  );
}
