import React from 'react';
import { shallow } from 'enzyme';
import { Form, Field } from '..';

it('Renders correctly', () => {
  const shallowCopy = shallow(
    <Form>
      <Field type="input" />
    </Form>
  );

  expect(shallowCopy.debug()).toMatchSnapshot();
});
