import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { ShoppingCart } from "../shopping-cart";

import "./header.scss";

type Props = {
  title: string;
  url?: string;
  productsInCart: number;
  children?: any;
  backUrl?: string;
};

const Header = ({ title, url, productsInCart, children, backUrl }: Props) => (
  <div className="header">
    <div className="button">{children}</div>
    <section className="title">{title}</section>
    {backUrl && (
      <Link to={backUrl} className="back-button">
        Назад
      </Link>
    )}
    {url ? (
      <Link to={url}>
        <ShoppingCart className="cart" counter={productsInCart} />
      </Link>
    ) : (
      <ShoppingCart className="cart" counter={productsInCart} />
    )}
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  productsInCart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};

export default Header;
