import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import FormContext from './context';

const Form = ({ className, onSubmit, children }) => {
  const [state, setState] = useState({});

  const updateField = useCallback(
    (key, value) => {
      setState({
        ...state,
        [key]: value
      });
    },
    [state]
  );

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      if (onSubmit) {
        onSubmit(state);
      }
    },
    [onSubmit, state]
  );

  const provideValue = useMemo(
    () => ({
      updateField,
      state
    }),
    [state, updateField]
  );

  return (
    <FormContext.Provider value={provideValue}>
      <form className={className} onSubmit={handleSubmit}>
        {typeof (children) === 'function' ? children(state) : children}
      </form>
    </FormContext.Provider>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.any.isRequired
};

export default Form;
