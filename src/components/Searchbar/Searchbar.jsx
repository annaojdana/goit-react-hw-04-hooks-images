import styles from './Searchbar.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

class Searchbar extends React.Component {
  render() {
    const { onSubmit } = this.props;
    const { form, input, button, searchbar,label } = styles;
    return (
      <header className={searchbar}>
        <form className={form} onSubmit={onSubmit}>
          <button type="submit" className={button}>
            <span className={label}>Search</span>
          </button>
          <input
            key={nanoid()}
            name = "queryInput"
            className={input}
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
