import React from "react";
import classnames from "classnames";

import styles from "./Collapse.scss";
import Flex from "../Flex";

export const Collapse = ({ className, header, tag: Tag, children }) => (
  <Tag className={classnames(styles.collapse, className)}>
    <Flex className={styles.header}>
      <div className={styles.button}></div>
      <div className={styles.content}>{header}</div>
    </Flex>
    <div className={styles.content}>{children}</div>
  </Tag>
);

Collapse.defaultProps = {
  tag: "div"
};

export default Collapse;
