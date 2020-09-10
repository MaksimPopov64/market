import React from 'react';
import PropTypes from 'prop-types';
import './product-card.scss';

const block = 'product-card';

export const ProductCard = ({ text, url, price, className, children }) => (

    <div className={`${block} ${className}`}>
        <img
            src={url}
            className="image" />
        <div className="title">{text}</div>
        <div className="price">{price}</div>
        {children}
    </div>

);

ProductCard.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string,
    className: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node,
};

