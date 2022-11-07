import { Link } from "react-router-dom";
import {
  Client0,
  Client1,
  Client2,
  Client3,
  Client4,
  Client5,
} from "./ClientsIcons";
import "./_Clients.scss";

export default function Clients() {
  return (
    <section className="section">
      <h2 className="section__title">Постоянные клиенты</h2>
      <div className="container">
        <ul className="clients">
          <li className="clients__item">
            <Link to="/" className="clients__link">
              <Client0 className="clients__icon" />
            </Link>
          </li>
          <li className="clients__item">
            <Link to="/" className="clients__link">
              <Client1 className="clients__icon" />
            </Link>
          </li>
          <li className="clients__item">
            <Link to="/" className="clients__link">
              <Client2 className="clients__icon" />
            </Link>
          </li>
          <li className="clients__item">
            <Link to="/" className="clients__link">
              <Client3 className="clients__icon" />
            </Link>
          </li>
          <li className="clients__item">
            <Link to="/" className="clients__link">
              <Client4 className="clients__icon" />
            </Link>
          </li>
          <li className="clients__item">
            <Link to="/" className="clients__link">
              <Client5 className="clients__icon" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
