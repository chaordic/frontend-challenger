import React from "react";
import { useSelector } from "react-redux";

import styles from "./Header.scss";
import Value from "../Value";
import Badge from "../Badge";
import Status from "../Status";

export const Header = ({ id, status, fulfillments }) => (
  <header className={styles.header}>
    <div className={styles.breadcrumb}>
      <div className={styles.item}>Tratamento de entregas</div>
    </div>
    <div className={styles.container}>
      <Value label="Pedido">{id}</Value>
      <Value label="Status do pedido">
        <Status>{status}</Status>
      </Value>
      <Value label="Entregas relacionadas">
        {Object.keys(fulfillments).map(fulfillment => (
          <Badge className={styles.badge} key={fulfillment}>
            {fulfillment}
          </Badge>
        ))}
      </Value>
    </div>
  </header>
);

export default () => {
  const { data } = useSelector(({ pedido }) => pedido);
  return Header(data);
};
