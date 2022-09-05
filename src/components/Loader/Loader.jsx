import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  const { item } = styles;
  
  return (
    <div className={item}>
      <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};

export default Loader;
