import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../../components/header/header';
import { goods } from '../../mocks/goods';
import { amountSelector } from '../../store/cart/selectors';
import { ProductsCollection } from '../products-collection/products-collection';

const Main = props => {
    const goodsCount = useSelector(state => amountSelector(state));
    return (
        <div>
            <Header title="Market" url="/cart" productsInCart={goodsCount} />
            <ProductsCollection type="main" products={goods} />
        </div>);
}

export default Main;