import { ImCross } from "react-icons/im";
import { IoPerson, IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Form, Formik, Field } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import "./_ModalForm.scss";

export default function ModalForm({ closeModal }) {
  const [checked, setChecked] = useState(false);
  return (
    <Formik
      initialValues={{ name: "", tel: "", email: "" }}
      onSubmit={(value, actions) => {
        actions.resetForm();
        toast(`Мы вам перезвоним ${value.name}`);
        closeModal();
      }}
    >
      <Form>
        <div className="modal-form">
          <label htmlFor="name" className="modal-form__label">
            Имя
          </label>
          <div className="modal-form__wrap">
            <Field
              type="text"
              name="name"
              id="name"
              className="modal-form__input"
              required
            />
            <IoPerson className="modal-form__icon" />
          </div>
        </div>

        <div className="modal-form">
          <label htmlFor="tel" className="modal-form__label">
            Телефон
          </label>
          <div className="modal-form__wrap">
            <Field
              type="tel"
              name="tel"
              id="tel"
              className="modal-form__input"
              required
            />
            <BsFillTelephoneFill className="modal-form__icon" />
          </div>
        </div>
        <div className="modal-form">
          <label htmlFor="email" className="modal-form__label">
            Почта
          </label>
          <div className="modal-form__wrap">
            <Field
              type="email"
              name="email"
              id="email"
              className="modal-form__input"
              required
            />
            <IoMail className="modal-form__icon" />
          </div>
        </div>
        <div className="modal-form">
          <label htmlFor="textarea" className="modal-form__label">
            Комментарий
          </label>
          <textarea
            name="comment"
            id="textarea"
            className="modal-form__textarea"
            placeholder="Введите текст"
          ></textarea>
        </div>
        <div className="modal-form modal-checkbox">
          <Field
            type="checkbox"
            id="modal-check"
            className="modal-checkbox__input visually-hidden"
            checked={checked ? true : false}
            onChange={() => setChecked((state) => !state)}
          />
          <label htmlFor="modal-check" className="modal-checkbox__text">
            Соглашаюсь с рассылкой и принимаю
            <span className="">
              <a href="/" className="policy-accent">
                Условия договора
              </a>
            </span>
          </label>
        </div>
        <button
          type="submit"
          className={`btn modal-btn ${!checked && "visually-hidden"}`}
          disabled={!checked ? true : false}
        >
          Отправить
        </button>
        <button
          type="button"
          className="close-icon__button"
          onClick={() => {
            closeModal();
          }}
        >
          <ImCross className="close-icon" color="black" />
        </button>
      </Form>
    </Formik>
  );
}
