import TeamCardSet from "./TeamCardSet/TeamCardSet";
import "./_Team.scss";
import { teamContentArray } from "./TeamContentArray";
export default function Team() {
  return (
    <section className="section team">
      <div className="container">
        <h2 className="section__title">Наша команда</h2>
        <TeamCardSet array={teamContentArray} />
      </div>
    </section>
  );
}
