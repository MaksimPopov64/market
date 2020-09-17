import { createSelector } from "reselect";

export const cartItemsSelector = ({ cart }: any) =>
  cart.items &&
  cart.items.filter((item: any) => {
    if (cart.counters[item.id] > 0) return item;
  });
export const countersSelector = ({ cart }: any) => cart.counters;
export const amountSelector = ({ cart }: any) => Object.values(cart.counters).reduce((a: any, b: any) => a + b, 0);

export const sumSelector = createSelector([cartItemsSelector, countersSelector], (items, counts) => {
  let sum = 0;
  items.forEach((item: any) => {
    sum += item.price * counts[item.id];
  });

  return sum;
});
