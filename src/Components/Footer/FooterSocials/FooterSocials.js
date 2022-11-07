import Socials from "../../Socials/Socials";
export default function FooterSocials() {
  return (
    <div className="social-footer footer__container--item">
      <p className="footer__text">ПРИСОЕДИНЯЙТЕСЬ</p>
      <div style={{ color: "white" }}>
        {" "}
        <Socials />
      </div>
    </div>
  );
}
