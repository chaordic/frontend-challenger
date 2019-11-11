import React, { Fragment } from 'react';
import { string, array, func } from 'prop-types';
import cssModules from 'react-css-modules';
import ShipDetails from '../ShipDetails/ShipDetails';

import styles from './styles.scss';

const OrderComponent = ({ pointOfSale, fulfillments, createdAt, id, onToggle }) => (
  <Fragment>
    <section className={styles.main}>
      <h1>Dados do pedido</h1>
      <article>
        {createdAt !== undefined &&
          <section>
            <p className={styles.addressTitle}>Comprado em</p>
            <p className={styles.address}>{createdAt}</p>
          </section>
        }

        {pointOfSale !== undefined &&
          <section>
            <p className={styles.addressTitle}>Ponto de venda</p>
            <p className={styles.address}>{pointOfSale}</p>
          </section>
        }
      </article>
    </section>
    {fulfillments !== undefined && Object.values(fulfillments).map(f => (
      <ShipDetails
        id={id}
        fulfillment={f}
        onToggle={onToggle}
      />
    ))}
  </Fragment>
);

OrderComponent.propTypes = {
  id: string,
  pointOfSale: string,
  createdAt: string,
  fulfillments: array,
  onToggle: func,
};

OrderComponent.defaultProps = {
  id: '',
  createdAt: '',
  pointOfSale: '',
  fulfillments: [],
  onToggle: () => {},
};

export default cssModules(OrderComponent, styles, { allowMultiple: true });
