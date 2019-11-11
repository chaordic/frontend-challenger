import React from 'react';
import { object, array } from 'prop-types';

const OrderData = ({ payments, totals }) => (
  <section>
    <h1>Dados do pagamento</h1>
    {totals !== undefined &&
      <div>
        {totals.subtotal !== undefined &&
          <p>Subtotal: {totals.subtotal}</p>
        }
        {totals.freightCosts !== undefined &&
          <p>Frete: {totals.freightCosts}</p>
        }
        {totals.discount !== undefined &&
          <p>Desconto: {totals.discount}</p>
        }
        {totals.discount !== undefined &&
          <p>Valor total: {totals.discount}</p>
        }
      </div>
    }
    <hr />

    <div>
      <h1>Método de pagamento</h1>
      {payments !== undefined && payments.map((payment, i) => (
        <p key={i}>
          {payment.brand !== undefined &&
            payment.brand
          }

          {payment.number !== undefined &&
            payment.number
          }

          {payment.expiresAt !== undefined &&
            ` Exp. ${payment.expiresAt} `
          }

          {payment.installments !== undefined &&
            ` ${payment.installments}x de R$${payment.amount}`
          }
        </p>
      ))}
    </div>

  </section>
);

OrderData.propTypes = {
  payments: array,
  totals: object,
};

OrderData.defaultProps = {
  payments: [],
  totals: {},
};

export default OrderData;
