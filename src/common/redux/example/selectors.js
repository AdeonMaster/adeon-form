import createLoggedSelector from 'logged-selector';

export const getValue = state => state.example.value;

export const getComputedValue = createLoggedSelector(
  'getComputedValue',
  getValue,
  value => value + 20
);
