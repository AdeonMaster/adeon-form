/* eslint sonarjs/cognitive-complexity:0 */

import { createElement, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import useFormContext from './use-form-context';

const getDefaultValue = (type, value, defaultValue, defaultChecked) => {
  switch (type) {
    case 'checkbox':
      return defaultChecked || false;

    case 'radio':
      return defaultChecked ? value : '';

    default:
      return defaultValue || '';
  }
};

const Field = ({
  name,
  type,
  value,
  defaultValue,
  defaultChecked,
  children,
  component,
  ...otherProps
}) => {
  const context = useFormContext();

  const inputValue = useMemo(() => {
    const { state } = context;

    if (state[name] === undefined) {
      return getDefaultValue(type, value, defaultValue, defaultChecked);
    }

    return state[name];
  }, [context, name, type, value, defaultChecked, defaultValue]);

  const handleChange = useCallback(
    (event) => {
      const { updateField } = context;
      const inputValue = type === 'checkbox' ? event.target.checked : event.target.value;

      updateField(name, inputValue);
    },
    [context, name, type],
  );

  const props = useMemo(() => {
    const commonProps = {
      ...otherProps,
      name,
      type,
      onChange: handleChange,
    };

    switch (type) {
      case 'checkbox':
        return {
          ...commonProps,
          checked: inputValue,
        };

      case 'radio':
        return {
          ...commonProps,
          value,
          checked: inputValue === value,
        };

      default:
        return {
          ...commonProps,
          value: inputValue,
        };
    }
  }, [name, type, value, otherProps, inputValue, handleChange]);

  useEffect(
    () => {
      const { state } = context;
      const inputValue = getDefaultValue(type, value, defaultValue, defaultChecked);

      // mutate the context state trick
      if (
        type !== 'radio' ||
        (type === 'radio' && state[name] === undefined) ||
        (type === 'radio' && state[name] !== value && defaultChecked)
      ) {
        state[name] = inputValue;
      }

      // updateField(name, inputValue);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (typeof children === 'function') {
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
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.any,
  defaultChecked: PropTypes.bool,
  children: PropTypes.any,
};

export default Field;
