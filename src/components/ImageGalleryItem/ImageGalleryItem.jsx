import styles from './ImageGalleryItem.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {

  render() {

    const { imageData, openModal } = this.props;
    const { item, image } = styles;
    const { webformatURL, tags, largeImageURL,id } = imageData;

    return (
      <li className={item}>
        <img
          className={image}
          key={id}
          src={webformatURL}
          alt={tags}
          onClick={() => openModal(largeImageURL, tags)}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  imageData: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
