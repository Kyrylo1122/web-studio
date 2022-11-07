import Socials from "../../../Socials/Socials";
import "./_TeamCardSet.scss";
export default function TeamCardSet({ array }) {
  return (
    <ul className="team__list">
      {array.map(({ id, name, text, images: { mob, tabl, desk } }) => (
        <li key={id} className="team__item">
          <picture>
            <source
              srcSet={`${desk.small} 1x,
                    ${desk.large} 2x
                  `}
              media="(min-width:1200px)"
            />

            <source
              srcSet={`
                    ${tabl.small}    1x,
                    ${tabl.large} 2x
                  `}
              media="(min-width:768px)"
            />
            <source
              srcSet={`${mob.small} 1x,
                    ${mob.large} 2x
                  `}
              media="(max-width:767px)"
            />
            <img src={mob.small} alt={name} loading="lazy" />
          </picture>

          <div className="team-card">
            <h3 className="team-card__title">{name}</h3>
            <p lang="en" className="team-card__text">
              {text}
            </p>
            <div className="team-card__socials">
              <Socials />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
