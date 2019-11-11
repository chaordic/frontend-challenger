import React from 'react';
import renderer from 'react-test-renderer';
import OrderData from './OrderData';

const props = {
  payments: [{
    amount: 'R$500,00',
    brand: 'VISA',
    expiresAt: '02/23',
    installments: '1',
    number: '**** **** **** 3455',
    type: 'CREDIT_CARD',
  }],
  totals: {
    isLoading: false,
    subtotal: 'R$500,00',
    freightCosts: 'R$20,00',
    discount: 'R$10,00',
    total: 'R$510,00',
  },
};

describe('(Component) OrderData', () => {
  it('should render an OrderData with result', () => {
    const tree = renderer.create(<OrderData {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
