import React from "react";
import { useSelector } from "react-redux";

import Value from "../../Value";
import withCard from "../../../hoc/withCard";

export const ClientData = ({
  customer: { email, name, document, telephone },
  billingAddress: { zip, city, state, number, address1 }
}) => (
  <>
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
  </>
);

export default props => {
  const { data, ...status } = useSelector(({ pedido }) => pedido);
  return withCard(ClientData)({
    title: "Dados do Cliente",
    ...props,
    ...data,
    ...status
  });
};
