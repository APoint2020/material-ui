import * as React from 'react';
import { expect } from 'chai';
import { createMount, createShallow, getClasses } from '@material-ui/core/test-utils';
import describeConformance from '../test-utils/describeConformance';
import FormGroup from './FormGroup';

describe('<FormGroup />', () => {
  let mount;
  let shallow;
  let classes;

  before(() => {
    mount = createMount({ strict: true });
    shallow = createShallow({ dive: true });
    classes = getClasses(<FormGroup />);
  });

  after(() => {
    mount.cleanUp();
  });

  describeConformance(<FormGroup />, () => ({
    classes,
    inheritComponent: 'div',
    mount,
    refInstanceof: window.HTMLDivElement,
    skip: ['componentProp'],
  }));

  it('should render a div with a div child', () => {
    const wrapper = shallow(
      <FormGroup>
        <div className="woofFormGroup" />
      </FormGroup>,
    );

    expect(wrapper.children('span').length).to.equal(0);
    expect(wrapper.children('div').length).to.equal(1);
    expect(wrapper.children('div').first().hasClass('woofFormGroup')).to.equal(true);
  });
});
