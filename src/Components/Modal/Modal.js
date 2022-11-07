import "./_Modal.scss";
import ModalForm from "./ModalForm/ModalForm";
import { useEffect } from "react";

export default function Modal({ closeModal }) {
  useEffect(() => {
    const escape = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [closeModal]);
  return (
    <div className="backdrop">
      <div className="modal container">
        <p className="modal__text">Оставьте свои данные, мы вам перезвоним</p>
        <ModalForm closeModal={closeModal} />
      </div>
    </div>
  );
}
