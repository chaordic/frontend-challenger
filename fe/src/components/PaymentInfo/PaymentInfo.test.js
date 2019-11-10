import React from 'react';
import renderer from 'react-test-renderer';
import ClientInfo from './ClientInfo';

const props = {
  formatAddress: jest.fn(),
  availableButton: true,
};

describe('(Component) ClientInfo', () => {
  it('should render an ClientInfo with result', () => {
    const tree = renderer.create(<ClientInfo {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
