import React from "react";
import { useSelector } from "react-redux";
import styles from "./Delivery.scss";

import withContent from "../../../hoc/withContent";

import dateFormat from "../../../lib/dateFormat";
import moneyFormat from "../../../lib/moneyFormat";

import Flex from "../../Flex";
import Value from "../../Value";
import Collapse from "../../Collapse";
import Status from "../../Status";

// TODO: Mapear Json

export const Delivery = ({ id, className, fulfillments }) =>
  Object.keys(fulfillments).map((fulfillment, key) => {
    const { shipment, locationType, freightCosts, type, items } = fulfillments[
      fulfillment
    ];
    const itemsLength = Object.keys(items).length;
    const allItems = Object.keys(items).reduce(
      (sum, itemName) => sum + items[itemName]["quantity"],
      0
    );
    const subtotal = Object.keys(items).reduce(
      (sum, itemName) => sum + items[itemName]["price"],
      0
    );
    const total = subtotal + freightCosts.totalPrice;
    return (
      <Collapse
        key={key}
        className={className}
        header={
          <>
            <Value
              className={styles.collapse}
              label="Entrega F2"
              color="success"
            >
              {id}-{fulfillment}
            </Value>
            <Value className={styles.collapse} label="Status da entrega">
              <Status>PENDING_SHIP</Status>
            </Value>
          </>
        }
      >
        <h2>Dados da Entrega</h2>
        <Flex>
          <Value label="Retirado por">{shipment.name}</Value>
          <Value label="Modalidade">{locationType}</Value>
          <Value label="Data Previsão Cliente">
            {dateFormat(freightCosts.deliveryEstimatedDate)}
            {/* TODO: Validar  Data Previsão Cliente */}
          </Value>
          <Value label="Endereço de Entrega" className={styles.xpto2}>
            {shipment.address1}, {shipment.number} {shipment.city} -{" "}
            {shipment.state}
            <br />
            {shipment.zip}
          </Value>
        </Flex>
        <Flex>
          <div className={styles.xpto}>
            <Value label="Transportadora">SISTEMAS S.A</Value>
            <Value label="Tipo">{type}</Value>
          </div>
          <Value label="Preço do Frete">
            {moneyFormat(freightCosts.totalPrice)}
          </Value>
          <Value
            label="Data Previsão Transportadora"
            className={styles["estimated-date"]}
          >
            {dateFormat(freightCosts.deliveryEstimatedDate)}
          </Value>
        </Flex>
        <hr />
        <h2>Detalhes da Entrega</h2>
        <table className={styles["product-list"]}>
          <thead>
            <tr>
              <th>PRODUTO</th>
              <th>SKU</th>
              <th className={styles.center}>QTD.</th>
              <th>PREÇO</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(items).map((itemName, key) => {
              const {
                sku,
                quantity,
                stockType,
                name,
                size,
                color,
                image,
                acquisitionType,
                price
              } = items[itemName];
              const possibleFreightCosts =
                freightCosts.totalPrice / itemsLength;
              const totalValue = price * itemsLength + possibleFreightCosts;
              return (
                <tr>
                  <td>
                    <Flex>
                      <img
                        src={image}
                        alt={`Foto do ${name}`}
                        className={styles.thumbnail}
                      />
                      <div className={styles["product-name"]}>
                        {name}
                        <br />
                        {color},{size}
                      </div>
                    </Flex>
                  </td>
                  <td>{sku}</td>
                  <td className={styles.center}>{quantity}</td>
                  <td className={styles.qwerty}>
                    <p className={styles.values}>
                      <span>Subtotal</span>
                      <span>{moneyFormat(price)}</span>
                    </p>
                    <div className={styles.second}>
                      <p className={styles.values}>
                        <span>Frete</span>{" "}
                        <span>{moneyFormat(possibleFreightCosts)}</span>
                      </p>
                      <p className={styles.values}>
                        <span>Valor total</span>
                        <span>{moneyFormat(totalValue)}</span>
                      </p>
                    </div>
                  </td>
                </tr>
              );
            })}

            <tr>
              <td colspan="3"></td>
              <td className={styles.qwerty}>
                <p className={styles.units}>
                  {allItems} unidades de {itemsLength} itens
                </p>
                <p className={styles.values}>
                  <span>Subtotal</span>
                  <span>{moneyFormat(subtotal)}</span>
                </p>
                <p className={styles.values}>
                  <span>Frete</span>
                  <span>{moneyFormat(freightCosts.totalPrice)}</span>
                </p>
                <div className={styles.second}>
                  <p className={styles.values}>
                    <span>Valor total</span>
                    <span>{moneyFormat(total)}</span>
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Collapse>
    );
  });

export default props => {
  const { data, ...status } = useSelector(({ pedido }) => pedido);
  return withContent(Delivery)({
    ...props,
    ...data,
    ...status
  });
};
