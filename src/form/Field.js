import {
  createElement, useEffect, useCallback, useMemo
} from 'react';
import PropTypes from 'prop-types';

import withForm from './withForm';

const Field = ({
  context, name, type, defaultValue, defaultChecked, children, component, ...otherProps
}) => {
  const handleChange = useCallback(
    event => {
      const { updateField } = context;
      const value = type === 'checkbox'
        ? event.target.checked
        : event.target.value;

      updateField(name, value);
    },
    [context, name, type]
  );

  useEffect(
    () => {
      const { updateField, state } = context;

      const value = type === 'checkbox'
        ? (defaultChecked || false)
        : (defaultValue || '');

      // mutate the context state trick
      state[name] = value;

      updateField(name, value);
    },
    []
  );

  const value = useMemo(
    () => {
      const { state } = context;

      return state[name] || (
        type === 'checkbox'
          ? (defaultChecked || false)
          : (defaultValue || '')
      );
    },
    [context, name, type, defaultChecked, defaultValue]
  );

  const props = useMemo(
    () => (
      type === 'checkbox'
        ? {
          ...otherProps,
          name,
          type,
          onChange: handleChange,
          checked: value
        }
        : {
          ...otherProps,
          name,
          type,
          onChange: handleChange,
          value
        }
    ),
    [name, type, otherProps, value, handleChange]
  );

  if (typeof (children) === 'function') {
    return children(props);
  }

  switch (type) {
    case 'select':
      return createElement(component || 'select', props, children);

    case 'textarea':
      return createElement(component || 'textarea', props, null);

    default:
      return createElement(component || 'input', props, null);
  }
};

Field.propTypes = {
  context: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.any,
  defaultChecked: PropTypes.bool,
  children: PropTypes.any
};

export default withForm(Field);
