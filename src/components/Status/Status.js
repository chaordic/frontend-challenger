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
  PENDING_SHIP: {
    color: "info",
    value: "Separação"
  }
};

export const Status = ({ children }) => {
  const { color, value } = Enum[children] || Enum["default"];
  return (
    <div className={styles.content}>
      <Dot color={color} className={styles.dot}></Dot> {value}
    </div>
  );
};

export default Status;
