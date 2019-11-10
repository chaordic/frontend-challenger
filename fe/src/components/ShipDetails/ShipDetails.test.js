import React from 'react';
import renderer from 'react-test-renderer';
import ShipDetails from './ShipDetails';

const props = {
  formatAddress: jest.fn(),
  availableButton: true,
};

describe('(Component) ShipDetails', () => {
  it('should render an ShipDetails with result', () => {
    const tree = renderer.create(<ShipDetails {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
