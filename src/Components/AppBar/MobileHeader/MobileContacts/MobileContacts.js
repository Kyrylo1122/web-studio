import "./_MobileContacts.scss";
export default function MobileContacts() {
  return (
    <ul className="mob-contacts">
      <li className="mob-contacts__item">
        <a
          href="tel:+380961111111"
          className="mob-contacts__link mob-contacts__link--tel"
        >
          +38 096 111 11 11
        </a>
      </li>
      <li className="mob-contacts__item">
        <a
          href="mailto:info@devstudio.com"
          className=" mob-contacts__link mob-contacts__link--mail"
        >
          info@devstudio.com
        </a>
      </li>
    </ul>
  );
}
