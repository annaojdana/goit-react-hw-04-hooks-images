import styles from './ImageGalleryItem.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageData, openModal }) => {
  const { item, image } = styles;
  const { webformatURL, tags, largeImageURL, id } = imageData;
  
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
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  imageData: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};
