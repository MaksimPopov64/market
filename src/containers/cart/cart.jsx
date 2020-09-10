import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from '../../components/header/header';
import { Button } from '../../components/button/button';
import { cartItemsSelector, amountSelector, sumSelector } from '../../store/cart/selectors';
import { clearCart } from '../../store/cart/actions';
import { ProductsCollection } from '../products-collection/products-collection';
import { Total } from '../../components/total/total';

const Cart = props => {
    const dispatch = useDispatch();
    const goods = useSelector(state => cartItemsSelector(state));
    const goodsCount = useSelector(state => amountSelector(state));
    const sum = useSelector(state => sumSelector(state));

    return (
        <div className="container">
            <Header title="Market" productsInCart={goodsCount} >
                {!!goodsCount &&
                    <Button
                        text="Очистить корзину"
                        handleClick={() => dispatch(clearCart())} />
                }
            </Header>

            <ProductsCollection type="cart" products={goods} />
            {!!goodsCount &&
                <Total sum={sum} />
            }
        </div >)
}

export default Cart;