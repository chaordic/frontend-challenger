import React from 'react';
import { string, object } from 'prop-types';
import ShipDetails from '../ShipDetails/ShipDetails';

const OrderComponent = ({ pointOfSale, fulfillments, createdAt }) => (
  <section>
    <h1>Dados do pedido</h1>
    {createdAt !== undefined &&
      <div>
        <p>Comprado em</p>
        <p>{createdAt}</p>
      </div>
    }

    {pointOfSale !== undefined &&
      <div>
        <p>Ponto de venda</p>
        <p>{pointOfSale}</p>
      </div>
    }

    {fulfillments !== undefined && Object.values(fulfillments).map(f => (
      <ShipDetails
        fulfillment={f}
      />
    ))}
  </section>
);

OrderComponent.propTypes = {
  pointOfSale: string.isRequired,
  createdAt: string.isRequired,
  fulfillments: object.isRequired,
};

OrderComponent.defaultProps = {
};

export default OrderComponent;
