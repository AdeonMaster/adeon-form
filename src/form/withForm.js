import React from 'react';

import FormContext from './context';

export default Component => function withForm(props) {
  return (
    <FormContext.Consumer>
      {context => <Component context={context} {...props} />}
    </FormContext.Consumer>
  );
};
