import styles from './ImageGallery.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';

const ImageGallery = ({ imagesData, openModal }) => {
  const { gallery } = styles;

  return (
    <ul className={gallery}>
      {imagesData.map(imageData => (
        <ImageGalleryItem
          key={nanoid()}
          imageData={imageData}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  imagesData: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};
