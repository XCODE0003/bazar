import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ isOpen, onClose, children, className }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        document.body.style.overflow = 'unset';
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return ReactDOM.createPortal(
    <div
      className={`modal-overlay ${isOpen ? 'modal-open' : 'modal-close'}`}
      onClick={(e) => {
        e.stopPropagation();
        onClose(e);
      }}
    >
      <div
        className={` rounded-lg bg-accent-300 flex flex-col gap-1.5 py-6 px-10 max-w-[900px] w-full ${isOpen ? 'modal-content-open' : 'modal-content-close'} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >

        <div className="modal-body ">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
