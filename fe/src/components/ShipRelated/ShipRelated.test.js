import React from 'react';
import renderer from 'react-test-renderer';
import ShipRelated from './ShipRelated';

const props = {
  onClick: jest.fn(),
  id: 'F1',
};

describe('(Component) ShipRelated', () => {
  it('should render an ShipRelated with result', () => {
    const tree = renderer.create(<ShipRelated {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
