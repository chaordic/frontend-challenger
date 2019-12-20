import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Value from "../../Value";
import withCard from "../../../hoc/withCard";
import dateFormat from "../../../lib/dateFormat";
import Flex from "../../Flex";

export const OrderData = ({ createdAt, pointOfSale }) => (
  <Flex>
    <Value label="Comprado em">
      {createdAt && dateFormat(createdAt, true)}
    </Value>
    <Value label="Ponto de Venda">{pointOfSale}</Value>
    <Value label="Modalidade de Entrega">
      F1 Envio pela loja, F2 Retira em Loja
      {/* TODO:Rever dados */}
    </Value>
  </Flex>
);

OrderData.propTypes = {
  createdAt: PropTypes.string,
  pointOfSale: PropTypes.string
};

export default props => {
  const { data, ...status } = useSelector(({ pedido }) => pedido);
  return withCard(OrderData)({
    title: "Dados do Pedido",
    ...props,
    ...data,
    ...status
  });
};
