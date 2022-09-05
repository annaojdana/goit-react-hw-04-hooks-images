import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ onClick }) => {
  const { button } = styles;

  return (
    <button className={button} onClick={onClick} type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
