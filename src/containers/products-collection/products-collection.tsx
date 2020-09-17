import React, { ElementType } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem, decrementCount, incrementCount } from "../../store/cart/actions";
import { Button } from "../../components/button";
import { ProductCard } from "../../components/product-card";
import { countersSelector } from "../../store/cart/selectors";

import "./products-collection.scss";

const block = "products-collection";

type Props = {
  products: [];
  type: string;
  children?: React.ReactNode;
};

const ProductsCollection = ({ products, type, children }: Props) => {
  const dispatch = useDispatch();
  const counters = useSelector(countersSelector);

  const rrr = (type: string, item: any): any => {
    if (type === "main") {
      return <Button className="buy-button" text="Купить" handleClick={() => dispatch(addToCart(item))} />;
    } else {
      return (
        <section className="count-buttons">
          <div className="remove-icon" onClick={() => dispatch(removeItem(item))} />
          <Button text="-" handleClick={() => dispatch(decrementCount(item))} />
          <span className="amount">{counters[item.id]}</span>
          <Button text="+" handleClick={() => dispatch(incrementCount(item))} />
        </section>
      );
    }
  };

  return (
    <>
      <div className="extended">{children}</div>
      <div className={block}>
        {products.map((item: any) => (
          <ProductCard className="items" key={item.id} url={item.img} text={item.name} price={item.price}>
            {rrr(type, item)}
          </ProductCard>
        ))}
      </div>
    </>
  );
};

export default ProductsCollection;
