import "./_socials.scss";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function Socials() {
  return (
    <ul className="social">
      <li className="social__item">
        <a href="https://www.instagram.com/" className="social__link">
          <FaInstagram size="1.5rem" className="social__icon" color="inherit" />
        </a>
      </li>
      <li className="social__item">
        <a href="https://twitter.com/" className="social__link">
          <FaTwitter size="1.5rem" className="social__icon" />
        </a>
      </li>
      <li className="social__item">
        <a href="https://www.facebook.com/" className="social__link">
          <FaFacebookF size="1.5rem" className="social__icon" />
        </a>
      </li>
      <li className="social__item">
        <a href="https://www.linkedin.com/" className="social__link">
          <FaLinkedinIn size="1.5rem" className="social__icon" />
        </a>
      </li>
    </ul>
  );
}
