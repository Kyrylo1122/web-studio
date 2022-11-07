import Logo from "../../Logo/Logo";
import "./_FooterAddress.scss";
export default function FooterAddress() {
  return (
    <div className="footer-address footer__container--item">
      <Logo />

      <address className="footer-address__address">
        г. Киев, пр-т Леси Украинки, 26
      </address>
      <ul className="footer-address__list">
        <li className="footer-address__item">
          <a href="mailto:info@devstudio.com" className="footer-address__link ">
            info@devstudio.com
          </a>
        </li>
        <li className="footer-address__item">
          <a href="tel:+380961111111" className="footer-address__link ">
            +38 096 111 11 11
          </a>
        </li>
      </ul>
    </div>
  );
}
