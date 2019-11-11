import React from 'react';
import renderer from 'react-test-renderer';
import HeaderShip from './HeaderShip';

const props = {
  formatAddress: jest.fn(),
  availableButton: true,
};

describe('(Component) HeaderShip', () => {
  it('should render an HeaderShip with result', () => {
    const tree = renderer.create(<HeaderShip {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
