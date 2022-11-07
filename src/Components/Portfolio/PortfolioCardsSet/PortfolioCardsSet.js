import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./_PortfolioCardSet.scss";
export default function PortfolioCardsSet({ array }) {
  return (
    <ul className="card-set">
      {array.map((item, index) => (
        <li key={item.id} className="card-set__item">
          <PortfolioCard item={item} index={index} />
        </li>
      ))}
    </ul>
  );
}
