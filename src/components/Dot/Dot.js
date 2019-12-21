import React from "react";
import classnames from "classnames";

import styles from "./Dot.scss";

export const Dot = ({ className, color, children }) => (
  <span className={classnames(styles.dot, styles[color], className)}>
    {children}
  </span>
);

export default Dot;
