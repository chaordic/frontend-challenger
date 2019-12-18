import React from "react";

import styles from "./App.scss";
import Header from "../components/Header";
import Flex from "../components/Flex";
import ClientData from "../components/business/ClientData";

export const App = () => (
  <>
    <Header></Header>
    <main className={styles.main}>
      <Flex>
        <ClientData className={styles["client-data"]}></ClientData>
        <ClientData className={styles["payment-details"]}></ClientData>
      </Flex>
    </main>
  </>
);

export default App;
