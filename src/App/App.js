import React from "react";

import styles from "./App.scss";
import Header from "../components/Header";
import Flex from "../components/Flex";
import ClientData from "../components/business/ClientData";
import PaymentDetails from "../components/business/PaymentDetails";
import OrderData from "../components/business/OrderData";
import Delivery from "../components/business/Delivery";

export const App = () => (
  <>
    {/* <Header></Header> */}
    <main className={styles.main}>
      {/* <Flex>
        <ClientData className={styles["client-data"]}></ClientData>
        <PaymentDetails className={styles["payment-details"]}></PaymentDetails>
      </Flex>
      <OrderData className={styles.section}></OrderData> */}
      <Delivery className={styles.section}></Delivery>
    </main>
  </>
);

export default App;
