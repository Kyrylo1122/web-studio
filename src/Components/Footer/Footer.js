import FooterAddress from "./FooterAddress/FooterAddress";
import FooterSocials from "./FooterSocials/FooterSocials";
import FooterSubscribe from "./FooterSubscribe/FooterSubscribe";
import "./_Footer.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <FooterAddress />
        <FooterSocials />
        <FooterSubscribe />
      </div>
    </footer>
  );
}
