import React from 'react';
import { object } from 'prop-types';

const ShipDetails = ({ fulfillment }) => (
  <section>
    <article>
      <h1>Dados da entrega</h1>
      <p>{fulfillment.id}</p>
    </article>

    <article>
      <h1>Detalhes da entrega</h1>
      {Object.values(fulfillment.items).map(item => (
        <p>
          {item.sku}
        </p>
      ))}
    </article>
  </section>
);

ShipDetails.propTypes = {
  fulfillment: object.isRequired,
};

ShipDetails.defaultProps = {
};

export default ShipDetails;
