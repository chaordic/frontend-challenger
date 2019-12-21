import React from "react";

import styles from "./Loading.scss";

export const Loading = () => (
  <div className={styles.ring}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

export default Loading;
