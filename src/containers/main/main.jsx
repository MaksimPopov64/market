import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { goods } from '../../mocks/goods';
import { Header } from '../../components/header/header';

import { amountSelector } from '../../store/cart/selectors';
import { ProductsCollection } from '../products-collection/products-collection';

const Main = props => {
    const goodsCount = useSelector(state => amountSelector(state));
    const [goodsItems, filterGoods] = useState(goods);
    const handleChange = val => {
        if (val.length) {
            filterGoods(goodsItems.filter(x =>
                x.name.toLowerCase().includes(val.toLowerCase()) || x.id.toLowerCase().includes(val.toLowerCase())));
        } else filterGoods(goods);
    }
    return (
        <div>
            <Header title="Market" url="/cart" productsInCart={goodsCount} />
            <div style={{ paddingTop: '50px' }}>
                <input type="text" placeholder="Search" onChange={(e) => _.debounce(handleChange(e.target.value))} />
            </div>
            <ProductsCollection type="main" products={goodsItems} />
        </div>);
}

export default Main;