import React from 'react';
import cssModules from 'react-css-modules';
import { object } from 'prop-types';

import styles from './styles.scss';

const ClientInfo = ({ customer, billingAddress, fulfillments, totals, payments }) => (
  <section className={styles.main}>
    <article>
      <h1>Dados do cliente</h1>
      {customer !== undefined &&
        <section>
          <p className={styles.p}>{customer.name}</p>
          <p className={styles.p}>{customer.email}</p>
          {customer.telephone &&
            <p className={styles.span}>{customer.telephone.number}</p>
          }
        </section>
      }

      {billingAddress !== undefined &&
        <section>
          <h4 className={styles.addressTitle}>Endereço de cobrança</h4>
          <p className={styles.address}>{billingAddress.formattedAddress}</p>

          <h4 className={styles.addressTitle}>Endereço de entrega</h4>

          {fulfillments.shipPlaces.map(place => (
            <p
              key={place}
              className={styles.address}
            >
              {place}
            </p>
          ))}
        </section>
      }
    </article>

    <article>
      <h1>Dados do pagamento</h1>
      {totals !== undefined &&
        <section className={styles.total}>
          {totals.subtotal !== undefined &&
            <section>
              <p className={styles.subTitle}>Subtotal:</p>
              <p
                className={`${styles.info} ${styles.right}`}
              >
                {totals.subtotal}
              </p>
            </section>
          }
          {totals.freightCosts !== undefined &&
            <section className={styles.total}>
              <p className={styles.subTitle}>Frete:</p>
              <p
                className={`${styles.info} ${styles.right}`}
              >
                {totals.freightCosts}
              </p>
            </section>
          }
          {totals.discount !== undefined &&
            <section className={styles.total}>
              <p className={styles.subTitle}>Desconto:</p>
              <p
                className={`${styles.info} ${styles.red} ${styles.right}`}
              >-{totals.discount}</p>
            </section>
          }
          {totals.total !== undefined &&
            <section className={styles.total}>
              <p className={styles.subTitle}>Valor total:</p>
              <p
                className={`${styles.info} ${styles.green} ${styles.right}`}
              >
                {totals.total}
              </p>
            </section>
          }
        </section>
      }
      <hr />

      <section className={styles.total}>
        <h1 className={styles.p}>Método de pagamento</h1>
        {payments !== undefined && Array.isArray(payments.items) && payments.items.map(payment => (
          <section className={styles.total}>
            <p
              className={`${styles.info} ${styles.left}`}
            >
              {payment.brand !== undefined &&
                payment.brand
              }

              {payment.number !== undefined &&
                ` ${payment.number}`
              }

              {payment.expiresAt !== undefined &&
                ` Exp. ${payment.expiresAt} `
              }
            </p>
            <p
              className={`${styles.info} ${styles.right}`}
            >
              {payment.installments !== undefined &&
                ` ${payment.installments}x de ${payment.amount}`
              }
            </p>
          </section>
        ))}
      </section>
    </article>
  </section>
);

ClientInfo.propTypes = {
  customer: object.isRequired,
  billingAddress: object.isRequired,
  fulfillments: object.isRequired,
  totals: object.isRequired,
  payments: object.isRequired,
};

ClientInfo.defaultProps = {
};

export default cssModules(ClientInfo, styles, { allowMultiple: true });
