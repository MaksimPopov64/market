import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { goods } from '../../mocks/goods';
import { Header } from '../../components/header';
import { Search } from '../../components/search';
import { ProductsCollection } from '../products-collection';

import { amountSelector } from '../../store/cart/selectors';

const Main = () => {
  const goodsCount = useSelector(amountSelector);
  const [goodsItems, filterGoods] = useState(goods);
  const handleChange = (val) => {
    if (val.length) {
      filterGoods(
        goodsItems.filter(
          (x) =>
            x.name.toLowerCase().includes(val.toLowerCase()) ||
            x.id.toLowerCase().includes(val.toLowerCase())
        )
      );
    } else filterGoods(goods);
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
