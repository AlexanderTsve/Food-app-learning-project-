import styles from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCloseModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("modal-root");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
