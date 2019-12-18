import React from "react";
import { useSelector } from "react-redux";
import classnames from "classnames";

import styles from "./ClientData.scss";
import Card from "../../Card";
import Value from "../../Value";

export const ClientData = ({
  className,
  color,
  children,
  customer: { email, name, document, telephone },
  billingAddress: { zip, city, state, number, address1 }
}) => (
  <Card tag="section" className={className}>
    <h1>Dados do Cliente</h1>
    <p>
      <b>{name}</b>
      <br />
      {document}
    </p>
    <p>
      <b>{email}</b>
      <br />
      {telephone.number}
    </p>

    <Value label="Endereço de Cobrança">
      {address1}, {number} {city} - {state} - {zip}
    </Value>
    <Value label="Endereço de Entrega">
      {address1}, {number} {city} - {state} - {zip}
    </Value>
  </Card>
);

export default props => {
  const { data } = useSelector(({ pedido }) => pedido);
  return ClientData({ ...props, ...data });
};
