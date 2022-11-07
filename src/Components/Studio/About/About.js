import { Antenna, Astronaut, Clock, Diagram } from "./AboutIcons";
import "./_About.scss";
export default function About() {
  return (
    <section className="section about">
      <div className="container">
        <h2 className="visually-hidden">почему мы</h2>
        <ul className="about__list">
          <li className="about__item">
            <div className="about-card">
              <Astronaut className="about-card__icon" />
            </div>
            <h3 className="about-card__title">ВНИМАНИЕ К ДЕТАЛЯМ</h3>
            <p className="about-card__text">
              Идейные соображения, а также начало повседневной работы по
              формированию позиции.
            </p>
          </li>
          <li className="about__item">
            <div className="about-card">
              <Clock className="about-card__icon" width="65px" height="70px" />
            </div>
            <h3 className="about-card__title">ПУНКТУАЛЬНОСТЬ</h3>
            <p className="about-card__text">
              Задача организации, в особенности же рамки и место обучения кадров
              влечет за собой.
            </p>
          </li>
          <li className="about__item">
            <div className="about-card">
              <Diagram
                className="about-card__icon"
                width="65px"
                height="70px"
              />
            </div>
            <h3 className="about-card__title">ПЛАНИРОВАНИЕ</h3>
            <p className="about-card__text">
              Равным образом консультация с широким активом в значительной
              степени обуславливает.
            </p>
          </li>
          <li className="about__item">
            <div className="about-card">
              <Antenna />
            </div>
            <h3 className="about-card__title">СОВРЕМЕННЫЕ ТЕХНОЛОГИИ</h3>
            <p className="about-card__text">
              Значимость этих проблем настолько очевидна, что реализация
              плановых заданий.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
