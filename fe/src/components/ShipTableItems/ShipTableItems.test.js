import React from 'react';
import renderer from 'react-test-renderer';
import ShipTableItems from './ShipTableItems';

const props = {
  formatAddress: jest.fn(),
  availableButton: true,
};

describe('(Component) ShipTableItems', () => {
  it('should render an ShipTableItems with result', () => {
    const tree = renderer.create(<ShipTableItems {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
