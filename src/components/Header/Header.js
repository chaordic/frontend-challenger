import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import withContent from "../../hoc/withContent";

import styles from "./Header.scss";
import Value from "../Value";
import Badge from "../Badge";
import Flex from "../Flex";
import Status from "../Status";

export const Header = ({ id, status, fulfillments }) => (
  <header className={styles.header}>
    <div className={styles.breadcrumb}>
      <div className={styles.item}>Tratamento de entregas</div>
    </div>
    <Flex className={styles.flex}>
      <Value className={styles["flex-item"]} label="Pedido">
        {id}
      </Value>
      <Value className={styles["flex-item"]} label="Status do pedido">
        <Status>{status}</Status>
      </Value>
      <Value className={styles["flex-item"]} label="Entregas relacionadas">
        {Object.keys(fulfillments).map(fulfillment => (
          <Badge className={styles.badge} key={fulfillment}>
            {fulfillment}
          </Badge>
        ))}
      </Value>
    </Flex>
  </header>
);

Header.propTypes = {
  id: PropTypes.string,
  status: PropTypes.string,
  fulfillments: PropTypes.string
};

Header.defaultProps = {
  fulfillments: {}
};

export default () => {
  const { data } = useSelector(({ pedido }) => pedido);
  return withContent(Header)(data);
};
