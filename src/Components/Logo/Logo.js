import { Link } from "react-router-dom";
import "./_Logo.scss";
export default function Logo() {
  return (
    <Link lang="en" to="/" className="logo">
      <span>Web</span>Studio
    </Link>
  );
}
