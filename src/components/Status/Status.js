import React from "react";

import styles from "./Status.scss";
import Dot from "../Dot";

const Enum = {
  default: {
    color: "danger",
    value: "Desconhecido"
  },
  PENDING: {
    color: "warning",
    value: "Pendente"
  },
  DELIVERED: {
    color: "success",
    value: "Entregue"
  },
  PENDING_SHIPMENT: {
    color: "info",
    value: "Separação"
  }
};

export const Status = ({ children = "" }) => {
  const key = Array.isArray(children) ? children.join("") : children;
  const [secondKey] = key.match(/[^_]+/);
  const { color, value } = Enum[key] || Enum[secondKey] || Enum["default"];
  return (
    <div className={styles.content}>
      <Dot color={color} className={styles.dot}></Dot> {value}
    </div>
  );
};

export default Status;
