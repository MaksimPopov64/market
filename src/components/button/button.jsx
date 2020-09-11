import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const block = 'button';

const Button = ({ text, handleClick, className = '' }) => (
  <button
    type="button"
    className={`${block} ${className}`}
    onClick={handleClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
