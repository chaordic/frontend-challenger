import React from "react";
import classnames from "classnames";

import styles from "./Flex.scss";

export const Flex = ({ className, tag: Tag, children }) => (
  <Tag className={classnames(styles.flex, className)}>{children}</Tag>
);

Flex.defaultProps = {
  tag: "div"
};

export default Flex;
