import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { ProductsCollection } from "../products-collection";
import { Total } from "../../components/total";

import { clearCart } from "../../store/cart/actions";
import { cartItemsSelector, amountSelector, sumSelector } from "../../store/cart/selectors";

const Cart = () => {
  const dispatch = useDispatch();
  const goods = useSelector(cartItemsSelector);
  const goodsCount: any = useSelector(amountSelector);
  const sum = useSelector(sumSelector);

  return (
    <div className="container">
      <Header title="Market" productsInCart={goodsCount} backUrl="/">
        {!!goodsCount && <Button text="Очистить" handleClick={() => dispatch(clearCart())} />}
      </Header>

      <ProductsCollection type="cart" products={goods} />
      {!!goodsCount && <Total sum={sum} />}
    </div>
  );
};

export default React.memo(Cart);
