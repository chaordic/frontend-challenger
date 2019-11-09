import React from 'react';
import renderer from 'react-test-renderer';
import SearchContainer from './SearchContainer';

const props = {
  onUpdate: jest.fn(),
  onClick: jest.fn(),
  onKeyUp: jest.fn(),
  text: '69028-401',
  availableButton: true,
};

describe('(Component) SearchContainer', () => {
  it('should render an SearchContainer with result', () => {
    const tree = renderer.create(<SearchContainer {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
