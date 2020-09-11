import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeItem, decrementCount, incrementCount } from '../../store/cart/actions';
import { Button } from '../../components/button';
import { ProductCard } from '../../components/product-card';
import { countersSelector } from '../../store/cart/selectors';


import './products-collection.scss';

const block = 'products-collection';

const ProductsCollection = ({ products, type, children }) => {
    const dispatch = useDispatch();
    const counters = useSelector(countersSelector);

    return (
        <>
            <div className="extended">{children}</div>
            <div className={block}>
                {
                    products.map(item =>
                        <ProductCard
                            className="items"
                            key={item.id}
                            url={item.img}
                            text={item.name}
                            price={item.price}
                        >
                            {type == "main" ?
                                <Button className="buy-button" text="Купить" handleClick={() => dispatch(addToCart(item))} /> :
                                <section className="count-buttons">
                                    <div className="remove-icon" onClick={() => dispatch(removeItem(item))} />
                                    <Button text="-" handleClick={() => dispatch(decrementCount(item))} />
                                    <span className="amount">{counters[item.id]}</span>
                                    <Button text="+" handleClick={() => dispatch(incrementCount(item))} />
                                </section>
                            }
                        </ProductCard>)
                }
            </div ></>)
}

ProductsCollection.propTypes = {
    Products: PropTypes.object,
    type: PropTypes.string,
};

export default ProductsCollection;
