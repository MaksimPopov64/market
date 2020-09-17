import React from "react";

import "./shopping-cart.scss";

const block = "shopping-cart";

type Props = {
  className: string;
  counter: number;
};

const ShoppingCart = ({ counter, className }: Props) => (
  <div className={`${block} ${className}`}>{!!counter && <div className="counter">{counter}</div>}</div>
);

export default ShoppingCart;
