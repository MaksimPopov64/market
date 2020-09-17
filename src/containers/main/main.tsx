import React, { useState } from "react";
import { useSelector } from "react-redux";
import { goods } from "../../mocks/goods";
import { Header } from "../../components/header";
import { Search } from "../../components/search";
import { ProductsCollection } from "../products-collection";

import { amountSelector } from "../../store/cart/selectors";

const Main = () => {
  const goodsCount: any = useSelector(amountSelector);
  const [goodsItems, filterGoods] = useState<any | []>(goods as []);

  const handleChange = (val: string): void => {
    if (val.length) {
      filterGoods(goodsItems.filter((x: any) => x.name.toLowerCase().includes(val.toLowerCase()) || x.id.toLowerCase().includes(val.toLowerCase())));
    } else filterGoods(goods as []);
  };
  return (
    <div>
      <Header title="Market" url="/cart" productsInCart={goodsCount} />
      <ProductsCollection type="main" products={goodsItems}>
        <Search handleChange={handleChange} />
      </ProductsCollection>
    </div>
  );
};

export default React.memo(Main);
