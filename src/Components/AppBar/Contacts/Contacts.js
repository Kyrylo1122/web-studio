import { IoIosPhonePortrait } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import "./_Contacts.scss";
export default function Contacts() {
  return (
    <ul className="contacts list">
      <li className="contacts__item">
        <a href="mailto:info@devstudio.com" className="contacts__link ">
          <div className="contacts-icon__container">
            <CiMail size="1.5rem" color="inherit" />
            <span>info@devstudio.com</span>
          </div>
        </a>
      </li>

      <li className="contacts__item">
        <a href="tel:+380961111111" className="contacts__link ">
          <div className="contacts-icon__container">
            <IoIosPhonePortrait size="1.5rem" color="inherit" />
            <span>+38 096 111 11 11</span>
          </div>
        </a>
      </li>
    </ul>
  );
}
