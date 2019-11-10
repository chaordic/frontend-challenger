import React from 'react';
import renderer from 'react-test-renderer';
import OrderData from './OrderData';

const props = {
  formatAddress: jest.fn(),
  availableButton: true,
};

describe('(Component) OrderData', () => {
  it('should render an OrderData with result', () => {
    const tree = renderer.create(<OrderData {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
