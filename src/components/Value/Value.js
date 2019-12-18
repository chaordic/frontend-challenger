import React from "react";
import classnames from "classnames";

import styles from "./Value.scss";
const VALID_SIZES = ["small", "normal", "big"];

export const Value = ({ size, className, label, children }) => {
  const _size = VALID_SIZES[size] || VALID_SIZES["normal"];
  return (
    <div className={classnames(styles.content, styles[_size], className)}>
      <div className={styles.label}>{label}</div>
      {children}
    </div>
  );
};

export default Value;
