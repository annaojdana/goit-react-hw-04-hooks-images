import styles from './App.module.css';
import React, { useState } from 'react';
import getImages from 'services/getImages';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';


const App = () => {
  const { container, error } = styles;

  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfHits, setNumberOfHits] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    modalImageUrl: '',
    modalImageAlt: '',
  });

  const setInitialState = () => {
    setQuery('');
    setImages([]);
    setPage(1);
    setNumberOfHits(0);
    setErrorMessage('');
    setIsLoading(false);
    setShowModal(false);
    setModalData({
      modalImageUrl: '',
      modalImageAlt: '',
    });
  };
  const handleModalClose = () => setShowModal(false);
  const handleShowModal = (modalImageUrl, modalImageAlt) => {
    setShowModal(true);
    setModalData({ modalImageUrl, modalImageAlt });
  };

  const handleSearchQuery = e => {
    e.preventDefault();
    setInitialState();
    setIsLoading(true);
    const { queryInput } = e.target.elements;
    const queryValue = queryInput.value;

    if (queryValue) {
      return getImages(queryValue, page)
        .then(data => {
          if (data.totalHits === 0) {
            setIsLoading(false);
            return setErrorMessage(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          }
          setErrorMessage('');
          setIsLoading(false);
          const setQueryData = ({ hits, totalHits }) => {
            setQuery(queryValue);
            setImages(hits);
            setNumberOfHits(totalHits);
            setPage(1);
          };
          return setQueryData(data);
        })
        .catch(error => {
          setIsLoading(false);
          console.log(error);
          setErrorMessage('Unable to fetch images');
        });
    }
    setIsLoading(false);
    setErrorMessage('The search field cannot be empty');
  };

  const handleLoadMore = () => {
    return getImages(query, page + 1)
      .then(data => {
        setImages([...images, ...data.hits]);
        setPage(page + 1);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className={container}>
      <Searchbar onSubmit={handleSearchQuery} />
      {isLoading ? (
        <Loader />
      ) : (
        images.length > 0 && (
          <>
            <ImageGallery imagesData={images} openModal={handleShowModal} />
            {images.length < numberOfHits && (
              <Button onClick={handleLoadMore} />
            )}
          </>
        )
      )}
      {errorMessage && <div className={error}>{errorMessage}</div>}
      {showModal && (
        <Modal
          src={modalData.modalImageUrl}
          alt={modalData.modalImageAlt}
          closeModal={handleModalClose}
        />
      )}
    </div>
  );
};

export default App;
