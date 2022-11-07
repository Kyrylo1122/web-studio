import { useEffect, useState } from "react";
import PortfolioCardsSet from "./PortfolioCardsSet/PortfolioCardsSet";
import PortfolioBtn from "./PortfolioBtn/PortfolioBtn";
import portfolioPosters from "./PortfolioPosters";

export default function Portfolio() {
  const [filter, setFilter] = useState("Все");
  const [filteredArray, setFilteredArray] = useState([]);
  useEffect(() => {
    if (filter === "Все") {
      setFilteredArray(portfolioPosters);
      return;
    }
    const array = portfolioPosters.filter((poster) => poster.text === filter);
    setFilteredArray(array);
  }, [filter]);

  return (
    <main>
      <section className="section">
        <div className="container">
          <h2 className="visually-hidden">portfolio</h2>
          <div className="portfolio-btn__container">
            <PortfolioBtn setFilter={setFilter} />
          </div>

          <PortfolioCardsSet array={filteredArray} />
        </div>
      </section>
    </main>
  );
}
