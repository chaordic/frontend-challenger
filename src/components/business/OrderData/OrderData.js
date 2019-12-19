import React from "react";
import { useSelector } from "react-redux";

import Value from "../../Value";
import withCard from "../../../hoc/withCard";
import dateFormat from "../../../lib/dateFormat";
import Flex from "../../Flex";

export const ClientData = ({ createdAt, pointOfSale }) => (
  <Flex>
    <Value label="Comprado em">{dateFormat(createdAt, true)}</Value>
    <Value label="Ponto de Venda">{pointOfSale}</Value>
    <Value label="Modalidade de Entrega">
      F1 Envio pela loja, F2 Retira em Loja
      {/* TODO:Rever dados */}
    </Value>
  </Flex>
);

export default props => {
  const { data, ...status } = useSelector(({ pedido }) => pedido);
  return withCard(ClientData)({
    title: "Dados do Pedido",
    ...props,
    ...data,
    ...status
  });
};
