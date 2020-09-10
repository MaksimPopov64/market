import React from 'react';
import PropTypes from 'prop-types';
const block = 'button';

import './button.scss';


export const Button = ({ text, handleClick, className = '' }) => (
    <button
        className={`${block} ${className}`}
        onClick={handleClick}>
        {text}
    </button >
);

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};
