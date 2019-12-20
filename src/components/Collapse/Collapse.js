import React, { useState } from "react";
import classnames from "classnames";

import styles from "./Collapse.scss";
import Flex from "../Flex";

export const Collapse = ({ className, header, tag: Tag, children }) => {
  const [height, setHeight] = useState(0);
  const myRef = React.createRef();

  return (
    <Tag
      className={classnames(
        styles.collapse,
        {
          [styles.open]: Boolean(height)
        },
        className
      )}
    >
      <Flex className={styles.header}>
        {myRef.current && myRef.current.clientHeight}
        <div
          className={styles.button}
          onClick={() => setHeight(height ? 0 : myRef.current.clientHeight)}
        ></div>
        <div className={styles.content}>{header}</div>
      </Flex>
      <div className={styles["content-wrapper"]} style={{ height }}>
        <div className={styles.content} ref={myRef}>
          {children}
        </div>
      </div>
    </Tag>
  );
};

Collapse.defaultProps = {
  tag: "div"
};

export default Collapse;
