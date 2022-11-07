import About from "./About/About";
import Clients from "./Clients/Clients";
import Hero from "./Hero/Hero";
import OurWork from "./OurWork/OurWork";
import Team from "./Team/Team";

export default function Studio() {
  return (
    <main>
      <Hero />
      <About />
      <OurWork />
      <Team />
      <Clients />
    </main>
  );
}
