import React from "react";
import classnames from "classnames";

import styles from "./Badge.scss";

export const Badge = ({ className, children }) => (
  <div className={classnames(styles.badge, className)}>{children}</div>
);

export default Badge;
