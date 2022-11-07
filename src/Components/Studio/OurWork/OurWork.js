import OurWorkList from "./OurWorkList/OurWorkList";
import { OurWorkContent } from "./OurWorkContent";

export default function OurWork() {
  return (
    <section className="section section__our-work">
      <div className="container">
        <h2 className="section__title">Чем мы занимаемся</h2>
        <OurWorkList array={OurWorkContent} />
      </div>
    </section>
  );
}
