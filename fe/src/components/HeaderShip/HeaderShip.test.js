import React from 'react';
import renderer from 'react-test-renderer';
import HeaderShip from './HeaderShip';

const props = {
  order: {
    isLoading: false,
    id: '22071559',
    status: 'PENDENTE',
    pointOfSale: 'E-commerce',
    createdAt: '5 de Fevereiro de 2019, às 19h30',
  },
  fulfillments: {
    isLoading: false,
    items: [{
      id: 'F1',
      locationId: '359',
      shipment: {
        zip: '00000-000',
        city: 'São Paulo',
        state: 'SP',
        number: '333',
        status: 'ACTIVE',
        country: 'Brasil',
        address1: 'Rua Oscar Freire',
        name: 'Renato Pereira',
        telephone: {
          type: 'billing',
          number: '(11) 98376-6343',
        },
      },
      status: 'ENTREGUE',
      type: 'ENVIADO',
      createdAt: '02/02/2019',
      updatedAt: '02/02/2019',
      freightCosts: {
        totalTime: 11,
        totalPrice: 10,
        deliveryEstimatedDate: '2019-03-05T19:30:00.000Z',
      },
      processedAt: '02/03/2019',
      locationType: 'Own Store',
      items: [{
        sku: 'AR384675',
        quantity: 2,
        stockType: 'PHYSICAL',
        name: 'Tenis Coca Coca Loretto - Feminino',
        size: '39',
        color: 'Branco, Cinza',
        image: 'http://image.url',
        price: 'R$100,00',
        desc: 'Branco, Cinza, 39',
      }, {
        sku: 'AR384677',
        quantity: 1,
        stockType: 'PHYSICAL',
        name: 'Tênis New Balance ML501 - Masculino',
        size: '40',
        color: 'Preto',
        image: 'http://image.url',
        price: 'R$100,00',
        desc: 'Preto, 40',
      }],
      geral: {
        quantity: 3,
        items: 2,
        totalFreight: 'R$0,00',
        totalPrice: 'R$200,00',
        total: 'R$200,00',
      },
      open: true,
      formattedAddress: 'Rua Oscar Freire, 333 São Paulo - SP - 00000-000 - Brasil',
      freight: {
        deliveryEstimatedDate: '02/03/2019',
        totalPrice: 'R$10,00',
      },
    }, {
      id: 'F2',
      locationId: '567',
      shipment: {
        zip: '00000-000',
        city: 'São Paulo',
        state: 'SP',
        number: '333',
        status: 'ACTIVE',
        country: 'Brasil',
        address1: 'Rua Oscar Freire',
        name: 'Renato Pereira',
        telephone: {
          type: 'billing',
          number: '(11) 98376-6343',
        },
      },
      status: 'PENDENTE',
      type: 'ENVIADO',
      createdAt: '02/02/2019',
      updatedAt: '04/10/2019',
      freightCosts: {
        totalTime: 11,
        totalPrice: 10,
        deliveryEstimatedDate: '2019-04-05T19:30:00.000Z',
      },
      processedAt: '04/10/2019',
      locationType: 'Own Store',
      items: [{
        sku: 'TN35568798',
        quantity: 1,
        stockType: 'PHYSICAL',
        name: 'Tênis Nike Air Max LTD 3 - Masculino',
        size: '39',
        color: 'preto/cinza',
        image: 'http://image.url',
        acquisitionType: 'PURCHASE',
        price: 'R$100,00',
        desc: 'preto/cinza, 39',
      }, {
        sku: 'TC587879785',
        quantity: 1,
        stockType: 'PHYSICAL',
        name: 'Tênis Nike Shox R4 - Masculino',
        size: '40',
        color: 'preto/cinza',
        image: 'http://image.url',
        acquisitionType: 'PURCHASE',
        price: 'R$100,00',
        desc: 'preto/cinza, 40',
      }],
      geral: {
        quantity: 2,
        items: 2,
        totalFreight: 'R$0,00',
        totalPrice: 'R$200,00',
        total: 'R$200,00',
      },
      open: true,
      formattedAddress: 'Rua Oscar Freire, 333 São Paulo - SP - 00000-000 - Brasil',
      freight: {
        deliveryEstimatedDate: '05/04/2019',
        totalPrice: 'R$10,00',
      },
    }],
    shipPlaces: ['Rua Oscar Freire, 333 São Paulo - SP - 00000-000 - Brasil'],
  },
};

describe('(Component) HeaderShip', () => {
  it('should render an HeaderShip with result', () => {
    const tree = renderer.create(<HeaderShip {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
