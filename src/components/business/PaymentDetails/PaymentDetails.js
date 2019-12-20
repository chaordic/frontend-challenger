import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useSelector } from "react-redux";
import styles from "./PaymentDetails.scss";

import moneyFormat from "../../../lib/moneyFormat";
import withCard from "../../../hoc/withCard";
import Value from "../../Value";

export const PaymentDetails = ({
  subtotal,
  freightCosts,
  discount,
  total,
  payments
}) => (
  <>
    <p className={styles.values}>
      <span>Subtotal</span> <span>{moneyFormat(subtotal)}</span>
    </p>
    <p className={styles.values}>
      <span>Frete</span> <span>{moneyFormat(freightCosts)}</span>
    </p>
    <p className={styles.values}>
      <span>Desconto</span>
      <span className={styles.discount}>{moneyFormat(discount)}</span>
    </p>
    <p className={classnames(styles.values, styles["total-value"])}>
      <span>Valor total</span>
      <span className={styles.total}>{moneyFormat(total)}</span>
    </p>
    <hr />
    <Value label="Método de Pagamento">
      {payments.map(
        ({ brand, amount, installments, expiresAt, number }, key) => (
          <div className={styles.values} key={key}>
            <span>
              {brand} {number} Exp.{expiresAt}
            </span>

            <span>
              {installments}x de {moneyFormat(amount)}
            </span>
          </div>
        )
      )}
    </Value>
  </>
);

PaymentDetails.defaultProps = {
  subtotal: 0,
  freightCosts: 0,
  discount: 0,
  total: 0,
  payments: []
};

PaymentDetails.propTypes = {
  subtotal: PropTypes.number,
  freightCosts: PropTypes.number,
  discount: PropTypes.number,
  total: PropTypes.number,
  payments: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string,
      amount: PropTypes.number,
      installments: PropTypes.string,
      expiresAt: PropTypes.string,
      number: PropTypes.any
    })
  )
};
export default props => {
  const { data = {}, ...status } = useSelector(({ pedido }) => pedido);
  const { totals, payments } = data;
  return withCard(PaymentDetails)({
    title: "Dados do pagamento",
    payments,
    ...totals,
    ...props,
    ...status
  });
};
