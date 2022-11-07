import { Suspense, useState } from "react";
import Modal from "../../Modal/Modal";
import "./_Hero.scss";
export default function Hero() {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  return (
    <section className="hero">
      <div className="container hero__container">
        <h1 className="hero__title">ЭФФЕКТИВНЫЕ РЕШЕНИЯ ДЛЯ ВАШЕГО БИЗНЕСА</h1>
        <button type="button" className="btn" onClick={() => openModal()}>
          Заказать услугу
        </button>
      </div>
      {modal && (
        <Suspense fallback={null}>
          <Modal closeModal={closeModal} />
        </Suspense>
      )}
    </section>
  );
}
