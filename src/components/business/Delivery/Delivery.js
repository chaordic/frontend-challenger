import React from "react";
import { useSelector } from "react-redux";
import styles from "./Delivery.scss";

import withContent from "../../../hoc/withContent";

import dateFormat from "../../../lib/dateFormat";
import moneyFormat from "../../../lib/moneyFormat";

import Flex from "../../Flex";
import Value from "../../Value";
import Collapse from "../../Collapse";
import Status from "../../Status";

// TODO: Mapear Json

export const Delivery = ({ id, className, fulfillments }) =>
  Object.keys(fulfillments).map((fulfillment, key) => {
    const { shipment, locationType, freightCosts, type } = fulfillments[
      fulfillment
    ];
    return (
      <Collapse
        key={key}
        className={className}
        header={
          <>
            <Value
              className={styles.collapse}
              label="Entrega F2"
              color="success"
            >
              {id}-{fulfillment}
            </Value>
            <Value className={styles.collapse} label="Status da entrega">
              <Status>PENDING_SHIP</Status>
            </Value>
          </>
        }
      >
        <h2>Dados da Entrega</h2>
        <Flex>
          <Value label="Retirado por">{shipment.name}</Value>
          <Value label="Modalidade">{locationType}</Value>
          <Value label="Data Previsão Cliente">
            {dateFormat(freightCosts.deliveryEstimatedDate)}
            {/* TODO: Validar  Data Previsão Cliente */}
          </Value>
          <Value label="Endereço de Entrega">
            {shipment.address1}, {shipment.number} {shipment.city} -{" "}
            {shipment.state}
            <br />
            {shipment.zip}
          </Value>
        </Flex>
        <Flex>
          <div className={styles.xpto}>
            <Value label="Transportadora">SISTEMAS S.A</Value>
            <Value label="Tipo">{type}</Value>
          </div>
          <Value label="Preço do Frete">
            {moneyFormat(freightCosts.totalPrice)}
          </Value>
          <Value
            label="Data Previsão Transportadora"
            className={styles["estimated-date"]}
          >
            {dateFormat(freightCosts.deliveryEstimatedDate)}
          </Value>
        </Flex>
      </Collapse>
    );
  });

export default props => {
  const { data, ...status } = useSelector(({ pedido }) => pedido);
  return withContent(Delivery)({
    ...props,
    ...data,
    ...status
  });
};
