import React from 'react';
import { object, func } from 'prop-types';

const ClientInfo = ({ customer, billingAddress, fulfillments, formatAddress }) => (
  <section>
    <h1>Dados do cliente</h1>
    {customer !== undefined &&
      <div>
        <p>{customer.name}</p>
        <p>{customer.email}</p>
        {customer.telephone &&
          <p>{customer.telephone.number}</p>
        }
      </div>
    }

    {billingAddress !== undefined &&
      <div>
        <p>Endereço de cobrança</p>
        <span>{formatAddress(billingAddress)}</span>

        <p>Endereço de entrega</p>

        {Object.values(fulfillments).map(e => (
          <p key={e.shipment.zip}>{formatAddress(e.shipment)}</p>
        ))}
      </div>
    }
  </section>
);

ClientInfo.propTypes = {
  customer: object.isRequired,
  billingAddress: object.isRequired,
  fulfillments: object.isRequired,
  formatAddress: func.isRequired,
};

ClientInfo.defaultProps = {
};

export default ClientInfo;
