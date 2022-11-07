import "./_PortfolioCard.scss";
export default function PortfolioCard({ item }) {
  const {
    title,
    text,
    images: { mob, tabl, desk },
  } = item;
  return (
    <>
      <div className="card-overlay">
        <picture>
          <source
            srcSet={`${desk.small} 1x,
                        ${desk.large} 2x
                      `}
            media="(min-width:1200px)"
          />

          <source
            srcSet={`
                        ${tabl.small}   1x,
                        ${tabl.large} 2x
                      `}
            media="(min-width:768px)"
          />
          <source
            srcSet={`
                        ${mob.small}   1x,
                       ${mob.large} 2x
                      `}
            media="(min-width:320px)"
          />
          <img src={mob.small} alt={title} loading="lazy" />
        </picture>
        <div className="card-overlay__text--container">
          <p className="card-overlay__text">
            Технокряк это современная площадка распространения коронавируса.
            Компании используют эту платформу для цифрового шпионажа и атак на
            защищённые сервера конкурентов.
          </p>
        </div>
      </div>

      <div className="portfolio-card__description">
        <h2 className="portfolio-card__title">{title}</h2>
        <p className="portfolio-card__text">{text}</p>
      </div>
    </>
  );
}
