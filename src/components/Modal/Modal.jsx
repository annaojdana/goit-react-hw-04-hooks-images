import styles from './Modal.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {

  handleOverlayClick = e => {
    const overlay = e.currentTarget;
    if (e.target === overlay) {
      this.props.closeModal();
    }
  };

  handleCloseOnEcsape = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleCloseOnEcsape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleCloseOnEcsape);
  }

  render() {
    const { overlay, modal } = styles;
    const { src, alt } = this.props;

    return (
      <div className={overlay} onClick={this.handleOverlayClick}>
        <div className={modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
