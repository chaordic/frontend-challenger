import React from "react";
import classnames from "classnames";

import styles from "./Value.scss";
const VALID_COLOR = ["primary", "success", "warning", "danger", "info"];
const VALID_SIZES = ["small", "normal", "big"];

export const Value = ({ color, size, className, label, children }) => {
  const _size = VALID_SIZES.includes(size) ? size : "normal";
  const _color = VALID_COLOR.includes(color) ? color : "";
  return (
    <div
      className={classnames(
        styles.content,
        styles[_size],
        styles[_color],
        className
      )}
    >
      <div className={styles.label}>{label}</div>
      {children}
    </div>
  );
};

export default Value;
