import { FaTelegramPlane } from "react-icons/fa";
import { Formik, Field, Form } from "formik";
import { toast } from "react-toastify";

import "./_FooterSubscribe.scss";
export default function FooterSubscribe() {
  return (
    <div className="footer-subscribe footer__container--item">
      <p className="footer__text">Подпишитесь на рассылку</p>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(value, actions) => {
          toast(`Мы отправили сообщение на ${value.email}`);
          actions.resetForm();
        }}
      >
        <Form>
          <div className="footer-subscribe__form">
            <Field
              type="email"
              name="email"
              className="footer-subscribe__input"
              placeholder="E-mail"
              required
            />
            <button type="submit" className="btn footer-subscribe__btn">
              <span>Подписаться</span>
              <FaTelegramPlane size="1.5rem" />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
