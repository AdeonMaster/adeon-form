import React from 'react';
import { render } from '@testing-library/react';

import { Form, Field } from '..';

describe('Form', () => {
  it('should render properly', () => {
    const { container } = render(
      <Form>
        <Field name="email" type="text" defaultValue="example@gmail.com" />
      </Form>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
