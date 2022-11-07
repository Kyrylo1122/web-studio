import "./_OurWorkList.scss";
export default function OurWorkList({ array }) {
  return (
    <ul className="work">
      {array.map(({ id, text, images: { small, large } }) => (
        <li key={id} className="work__item">
          <div className="work__overlay">
            <picture>
              <source
                srcSet={`${small} 1x, ${large} 2x`}
                media="(min-width:1200px)"
              />
              <img
                src={small}
                alt={text}
                width="370"
                height="294"
                loading="lazy"
              />
            </picture>

            <p className="work__text">{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
