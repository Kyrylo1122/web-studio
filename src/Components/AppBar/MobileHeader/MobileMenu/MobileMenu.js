import { ImCross } from "react-icons/im";
import NavigationList from "../../Navigation/NavigatinList/NavigationList";
import MobileContacts from "../MobileContacts/MobileContacts";
import "./_MobileMenu.scss";
import SocialsFullName from "../../../Socials/SocialsFullName/SocialsFullName";

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
        <NavigationList closeMenu={closeMenu} />
      </div>
      <div className="mob-menu--bottom">
        <SocialsFullName />
        <MobileContacts />
      </div>
    </div>
  );
}
