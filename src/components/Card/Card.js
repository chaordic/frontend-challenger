import React from "react";
import classnames from "classnames";

import styles from "./Card.scss";

export const Card = ({ className, tag: Tag, children }) => (
  <Tag className={classnames(styles.card, className)}>{children}</Tag>
);

Card.defaultProps = {
  tag: "div"
};

export default Card;
