import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Value from "../../Value";
import withCard from "../../../hoc/withCard";

export const ClientData = ({
  email,
  fullAndress,
  name,
  document,
  telephone
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
      {telephone}
    </p>

    <Value label="Endereço de Cobrança">{fullAndress}</Value>
    <Value label="Endereço de Entrega">{fullAndress}</Value>
  </>
);

ClientData.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  document: PropTypes.string,
  telephone: PropTypes.string,
  zip: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  number: PropTypes.string,
  address1: PropTypes.string
};

export default props => {
  const { data, ...status } = useSelector(({ delivery }) => delivery);
  const { billingAddress, customer } = data;
  const telephone = customer && customer.telephone && customer.telephone.number;
  const { zip, city, state, number, address1 } = billingAddress || {};
  const fullAndress = billingAddress
    ? `${address1}, ${number} ${city} - ${state} - ${zip}`
    : "";

  return withCard(ClientData)({
    title: "Dados do Cliente",
    ...props,
    fullAndress,
    ...customer,
    telephone,
    ...status
  });
};
