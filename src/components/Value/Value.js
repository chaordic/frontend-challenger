import React from "react";

import styles from "./Value.scss";
const VALID_SIZES = ["small", "normal", "big"];

export const Value = ({ size, label, children }) => {
  const _size = VALID_SIZES[size] || VALID_SIZES["normal"];
  return (
    <div className={styles[_size]}>
      <div className={styles.label}>{label}</div>
      {children}
    </div>
  );
};

export default Value;
