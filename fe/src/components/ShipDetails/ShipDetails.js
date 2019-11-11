import React, { Fragment } from 'react';
import { object, func, string } from 'prop-types';
import cssModules from 'react-css-modules';
import ShipTableItems from '../ShipTableItems/ShipTableItems';

import styles from './styles.scss';

const ShipDetails = ({ id, fulfillment, onToggle }) => (
  <Fragment>
    <section className={styles.menu} id={`shipItem-${fulfillment.id}`}>
      <button onClick={e => onToggle(fulfillment.id, e)}>
        <i className={`${styles.angle} ${fulfillment.open ? styles.down : styles.up}`} />
      </button>
      <section>
        <p className={`${styles.addressTitle} ${styles.green}`}>
          {`Entrega ${fulfillment.id}`}
        </p>
        <p className={`${styles.address}`}>
          {`${id}-${fulfillment.id}`}
        </p>
      </section>

      <section>
        <p className={styles.addressTitle}>
          Status da entrega
        </p>
        <p className={`${styles.address} ${fulfillment.type && styles[fulfillment.type.toLowerCase()]}`}>
          {fulfillment.type}
        </p>
      </section>
    </section>

    <section className={`${styles.main} ${fulfillment.open ? `${styles.fulfillmentOpen}` : `${styles.fulfillmentClose}`}`}>
      <h1>Dados da entrega</h1>
      <article>
        {fulfillment.shippedBy !== undefined &&
          <section>
            <p className={styles.addressTitle}>Retirado por</p>
            <p className={styles.address}>{fulfillment.shippedBy.name}</p>
            <p className={styles.address}>{fulfillment.shippedBy.cpf}</p>
          </section>
        }

        {fulfillment.locationType !== undefined &&
          <section>
            <p className={styles.addressTitle}>Modalidade</p>
            <p className={styles.address}>{fulfillment.locationType}</p>
          </section>
        }

        {fulfillment.processedAt !== undefined &&
          <section>
            <p className={styles.addressTitle}>Data Previsão Cliente</p>
            <p className={styles.address}>{fulfillment.processedAt}</p>
          </section>
        }

        {fulfillment.formattedAddress !== undefined &&
          <section>
            <p className={styles.addressTitle}>Endereço de entrega</p>
            <p className={styles.address}>{fulfillment.formattedAddress}</p>
          </section>
        }

        {fulfillment.freight !== undefined &&
          fulfillment.freight.system !== undefined &&
          <section>
            <p className={styles.addressTitle}>Transportadora</p>
            <p className={styles.address}>{fulfillment.freight.system}</p>
          </section>
        }

        {fulfillment.type !== undefined &&
          <section>
            <p className={styles.addressTitle}>Tipo</p>
            <p className={styles.address}>{fulfillment.type}</p>
          </section>
        }

        {fulfillment.freight !== undefined &&
          fulfillment.freight.totalPrice !== undefined &&
          <section>
            <p className={styles.addressTitle}>Preço do frete</p>
            <p className={styles.address}>{fulfillment.freight.totalPrice}</p>
          </section>
        }

        {fulfillment.freight !== undefined &&
          fulfillment.freight.deliveryEstimatedDate !== undefined &&
          <section>
            <p className={styles.addressTitle}>Data Previsão Transportadora</p>
            <p className={styles.address}>{fulfillment.freight.deliveryEstimatedDate}</p>
          </section>
        }

      </article>

      <hr />

      <ShipTableItems
        items={fulfillment.items}
        geral={fulfillment.geral}
      />

    </section>
  </Fragment>
);

ShipDetails.propTypes = {
  fulfillment: object.isRequired,
  onToggle: func,
  id: string,
};

ShipDetails.defaultProps = {
  onToggle: () => {},
  id: '',
};

export default cssModules(ShipDetails, styles, { allowMultiple: true });
