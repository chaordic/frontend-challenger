import React from 'react';
import renderer from 'react-test-renderer';
import ShipRelated from './ShipRelated';

const props = {
  formatAddress: jest.fn(),
  availableButton: true,
};

describe('(Component) ShipRelated', () => {
  it('should render an ShipRelated with result', () => {
    const tree = renderer.create(<ShipRelated {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
