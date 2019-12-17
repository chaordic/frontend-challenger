import React from "react";
import { useSelector } from "react-redux";

import styles from "./Header.scss";

export const Header = ({ id, status, fulfillments }) => (
  <header className={styles.header}>
    <div className={styles.breadcrumb}>
      <div className={styles.item}>Tratamento de entregas</div>
    </div>
    <div className={styles.container}>
      <div>
        Pedido
        <br />
        {id}
      </div>
      <div>
        Status do pedido
        <br />
        {status}
      </div>
      <div>
        Entregas relacionadas
        <br />
        {Object.keys(fulfillments).map(fulfillment => (
          <span className={styles.badge}>{fulfillment}</span>
        ))}
      </div>
    </div>
  </header>
);

export default () => {
  const { data } = useSelector(({ pedido }) => pedido);
  return Header(data);
};
