import styles from './Modal.module.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ src, alt, closeModal }) => {
  const { overlay, modal } = styles;

  const handleOverlayClick = e => {
    const modalOverlay = e.currentTarget;
    if (e.target === modalOverlay) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleCloseOnEcsape = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleCloseOnEcsape);

    return () => {
      document.removeEventListener('keydown', handleCloseOnEcsape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={overlay} onClick={handleOverlayClick}>
      <div className={modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
