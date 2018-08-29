import React from 'react';
import {assert} from 'chai';
import {mount} from 'enzyme';
import td from 'testdouble';
import ChipCheckmark from '../../../packages/chips/ChipCheckmark';

suite('ChipCheckmark');

test('renders with element and sets ref', () => {
  const wrapper = mount(<ChipCheckmark />);
  assert.equal(wrapper.instance().width, 0);
});
