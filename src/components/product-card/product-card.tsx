import React from "react";
import "./product-card.scss";

const block = "product-card";

type Props = {
  text: string;
  url: string;
  className: string;
  price: string | number;
  children: React.ElementType;
};

const ProductCard = ({ text, url, price, className, children }: Props) => (
  <div className={`${block} ${className}`}>
    <img src={url} className="image" />
    <div className="title">{text}</div>
    <div className="price">{price}</div>
    {children}
  </div>
);

export default ProductCard;
