import React from 'react';
import renderer from 'react-test-renderer';
import OrderComponent from './OrderComponent';

const props = {
  formatAddress: jest.fn(),
  availableButton: true,
};

describe('(Component) OrderComponent', () => {
  it('should render an OrderComponent with result', () => {
    const tree = renderer.create(<OrderComponent {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
