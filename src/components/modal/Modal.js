import ReactModal from 'react-modal';

import './modal.scss';

const Modal = ({ isOpen, close, success, text }) => {
  const onOk = () => {
    success();
    close();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <h2>Warning</h2>
      <span href="#" onClick={close} className="close">x</span>
      <p>{text}</p>
      <div className="buttons">
        <button type="button" onClick={onOk}>OK</button>
        <button type="button" onClick={close}>Cancel</button>
      </div>
    </ReactModal>
  );
};

export default Modal;
