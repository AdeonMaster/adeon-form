import React from 'react';
import PropTypes from 'prop-types';

const ExampleComponent = ({ value }) => <p>Value is: {value}</p>;

ExampleComponent.propTypes = {
  value: PropTypes.any.isRequired
};

export default ExampleComponent;
