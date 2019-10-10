import VALUE from './types';

const initialState = {
  value: 0
};

const increment = state => ({
  ...state,
  value: state.value + 1
});

const decrement = state => ({
  ...state,
  value: state.value - 1
});

const add = (state, { payload: { amount } }) => ({
  ...state,
  value: state.value + amount
});

export const example = (state = initialState, action) => {
  switch (action.type) {
    case VALUE.INCREMENT:
      return increment(state);

    case VALUE.DECREMENT:
      return decrement(state);

    case VALUE.ADD:
      return add(state, action);

    default:
      return state;
  }
};
