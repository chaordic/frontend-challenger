import React from "react";
import { useSelector } from "react-redux";
import styles from "./Delivery.scss";

import withContent from "../../../hoc/withContent";

import Flex from "../../Flex";
import Value from "../../Value";
import Collapse from "../../Collapse";
import Status from "../../Status";
export const Delivery = ({ id, className, fulfillments }) =>
  Object.keys(fulfillments).map((fulfillment, key) => (
    <Collapse
      key={key}
      className={className}
      header={
        <>
          <Value className={styles.collapse} label="Entrega F2" color="success">
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
        <Value label="Entrega F2" color="success">
          22071559-F1
        </Value>
        <Value label="Entrega F2" color="success">
          22071559-F1
        </Value>
        <Value label="Entrega F2" color="success">
          22071559-F1
        </Value>
        <Value label="Entrega F2" color="success">
          22071559-F1
        </Value>
      </Flex>
    </Collapse>
  ));

export default props => {
  const { data, ...status } = useSelector(({ pedido }) => pedido);
  return withContent(Delivery)({
    ...props,
    ...data,
    ...status
  });
};
