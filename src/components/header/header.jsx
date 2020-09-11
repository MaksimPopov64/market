import React from 'react';
import PropTypes from 'prop-types';
import {
    Link,
} from "react-router-dom";

import { ShoppingCart } from '../shopping-cart';

import './header.scss';

const Header = ({ title, url, productsInCart, children }) => (
    <div className="header">
        <div className="button">{children}</div>
        <section className="title">
            {title}
        </section>
        {url ?
            <Link to={url}>
                <ShoppingCart className="cart" counter={productsInCart} />
            </Link> :
            <ShoppingCart className="cart" counter={productsInCart} />}
    </div>
);

Header.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    productsInCart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node,
};

export default Header;