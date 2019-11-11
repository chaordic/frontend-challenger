import React from 'react';
import renderer from 'react-test-renderer';
import ShipTableItems from './ShipTableItems';

const props = {
  items: [{
    color: 'Branco, Cinza',
    desc: 'Branco, Cinza, 39',
    image: 'http://image.url',
    name: 'Tenis Coca Coca Loretto - Feminino',
    price: 'R$100,00',
    quantity: 2,
    size: '39',
    sku: 'AR384675',
    stockType: 'PHYSICAL',
  }],
  geral: {
    quantity: 3, items: 2, totalFreight: 'R$0,00', totalPrice: 'R$200,00', total: 'R$200,00',
  },
};

describe('(Component) ShipTableItems', () => {
  it('should render an ShipTableItems with result', () => {
    const tree = renderer.create(<ShipTableItems {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
