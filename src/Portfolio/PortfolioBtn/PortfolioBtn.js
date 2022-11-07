import { useState } from "react";
import "./_PortfolioBtns.scss";

const portfolioBtnList = [
  { id: 1, name: "Все" },
  { id: 2, name: "Веб-сайты" },
  { id: 3, name: "Приложения" },
  { id: 4, name: "Дизайн" },
  { id: 5, name: "Маркетинг" },
];

export default function PortfolioBtn({ setFilter }) {
  const [active, setActive] = useState(0);
  return (
    <ul className="portfolio-btn__list">
      {portfolioBtnList.map(({ id, name }, index) => (
        <li key={id} className="portfolio-btn__item">
          <label
            className={`portfolio-btn__button ${
              active === index && "portfolio-btn__button--active"
            }`}
          >
            <input
              type="radio"
              name="name"
              value={name}
              className="visually-hidden"
              onChange={() => {
                setFilter(name);
                setActive(index);
              }}
            />
            {name}
          </label>
        </li>
      ))}
    </ul>
  );
}
