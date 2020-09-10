import React from 'react';
import PropTypes from 'prop-types';

import './shopping-cart.scss';

const block = 'shopping-cart';

export const ShoppingCart = ({ counter, className }) => (

    <div
        className={`${block} ${className}`}
    >
        {!!counter && <div className="counter">{counter}</div>}
    </div >

);

ShoppingCart.propTypes = {
    counter: PropTypes.number,
    className: PropTypes.string,
};
