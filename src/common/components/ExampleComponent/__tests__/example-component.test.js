import { shallow } from 'enzyme';
import React from 'react';

import ExampleComponent from '..';

describe('Example Component', () => {
  it('Example Component matches snapshot', () => {
    const component = shallow(<ExampleComponent value="love" />);

    expect(component.getElement()).toMatchSnapshot();
  });
});
