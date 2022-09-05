import styles from './ImageGallery.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';

class ImageGallery extends Component {
  render() {
    const { gallery } = styles;
    const { imagesData, openModal } = this.props;
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
  }
}

ImageGallery.propTypes = {
  imagesData: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
