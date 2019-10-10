import VALUE from './types';

export const increment = () => ({
  type: VALUE.INCREMENT
});

export const decrement = () => ({
  type: VALUE.DECREMENT
});

export const add = amount => ({
  type: VALUE.ADD,
  payload: {
    amount
  }
});
