import { createSelector } from 'reselect';

export const cartItemsSelector = ({ cart }) => cart.items && cart.items.filter((item) => {
    if (cart.counters[item.id] > 0)
        return item;
});
export const countersSelector = ({ cart }) => cart.counters;
export const amountSelector = ({ cart }) => Object.values(cart.counters).reduce((a, b) => a + b, 0);

export const sumSelector = createSelector(
    [cartItemsSelector, countersSelector],
    (items, counts) => {
        let sum = 0;
        items.forEach((item) => {
            sum += item.price * counts[item.id];
        });

        return sum;
    }
);

