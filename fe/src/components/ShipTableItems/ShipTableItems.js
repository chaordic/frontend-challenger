import React, { Fragment } from 'react';
import { array, object } from 'prop-types';
import cssModules from 'react-css-modules';
import styles from './styles.scss';

/**
 * Format to portuguese shop status
 *
 * @param {Array} items Products
 * @param {Object} geral Object with consolidate data by items
 * @return {Component} Table of products
 */
const ShipTableItems = ({ items, geral }) => (
  <Fragment>
    <h1>Detalhes da entrega</h1>
    <table className={styles.table}>
      <thead className={`${styles.background}`}>
        <tr className={styles.tr}>
          <td>PRODUTO</td>
          <td>SKU</td>
          <td>QTD.</td>
          <td>PREÇO</td>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i} className={`${styles.tr} ${(i + 1) % 2 === 0 ? `${styles.background}` : ''}`}>
            <td className={styles.mainProduct}>
              <img
                alt={item.name}
                title={item.name}
                src={item.image}
              />
              <section>
                <p className={`${styles.address}`}>
                  {item.name}
                </p>

                <p className={`${styles.address}`}>
                  {item.desc}
                </p>
              </section>

            </td>
            <td>
              <p className={`${styles.address}`}>
                {item.sku}
              </p>
            </td>
            <td>
              <p className={`${styles.address}`}>
                {item.quantity}
              </p>
            </td>
            <td className={styles.total}>
              <section>
                <p className={styles.subTitle}>Subtotal:</p>
                <p
                  className={`${styles.info} ${styles.right}`}
                >
                  {item.price}
                </p>

                <p className={styles.subTitle}>Frete:</p>
                <p
                  className={`${styles.info} ${styles.right}`}
                >
                  {item.price}
                </p>

                <p className={styles.subTitle}>Valor total:</p>
                <p
                  className={`${styles.info} ${styles.right}`}
                >
                  {item.price}
                </p>
              </section>
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr className={styles.tr}>
          <td />
          <td />
          <td />
          <td className={styles.total}>
            <p
              className={`${styles.info} ${styles.left}`}
            >
              {geral.quantity} unidades de {geral.items} items
            </p>

            <section>
              <p className={styles.info}>Subtotal:</p>
              <p
                className={`${styles.info} ${styles.right}`}
              >
                {geral.totalPrice}
              </p>

              <p className={styles.info}>Frete total:</p>
              <p
                className={`${styles.info} ${styles.right}`}
              >
                {geral.totalFreight}
              </p>


              <p className={styles.info}>Valor total:</p>
              <p
                className={`${styles.info} ${styles.right}`}
              >
                {geral.total}
              </p>
            </section>

          </td>
        </tr>
      </tfoot>

    </table>
  </Fragment>
);

ShipTableItems.propTypes = {
  items: array,
  geral: object,
};

ShipTableItems.defaultProps = {
  items: [],
  geral: {},
};

export default cssModules(ShipTableItems, styles, { allowMultiple: true });
