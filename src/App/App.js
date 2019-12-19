import React from "react";

import styles from "./App.scss";
import Header from "../components/Header";
import Flex from "../components/Flex";
import ClientData from "../components/business/ClientData";
import PaymentDetails from "../components/business/PaymentDetails";
import OrderData from "../components/business/OrderData";
import Collapse from "../components/Collapse";
import Status from "../components/Status";
import Value from "../components/Value";

export const App = () => (
  <>
    <Header></Header>
    <main className={styles.main}>
      <Flex>
        <ClientData className={styles["client-data"]}></ClientData>
        <PaymentDetails className={styles["payment-details"]}></PaymentDetails>
      </Flex>
      <OrderData className={styles.section}></OrderData>
      <Collapse
        className={styles.section}
        header={
          <>
            <Value
              className={styles.collapse}
              label="Entrega F2"
              color="success"
            >
              22071559-F1
            </Value>
            <Value className={styles.collapse} label="Status da entrega">
              <Status>PENDING_SHIP</Status>
            </Value>
          </>
        }
      >
        <h2>Dados da Entrega</h2>
        <Flex>
          <Value label="Entrega F2" color="success">
            22071559-F1
          </Value>
          <Value label="Entrega F2" color="success">
            22071559-F1
          </Value>
          <Value label="Entrega F2" color="success">
            22071559-F1
          </Value>
          <Value label="Entrega F2" color="success">
            22071559-F1
          </Value>
        </Flex>
      </Collapse>
    </main>
  </>
);

export default App;
