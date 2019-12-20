import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styles from "./Delivery.scss";
import stylesItem from "./Item.scss";

import withContent from "../../../hoc/withContent";

import dateFormat from "../../../lib/dateFormat";
import moneyFormat from "../../../lib/moneyFormat";

import Flex from "../../Flex";
import Value from "../../Value";
import Collapse from "../../Collapse";
import Status from "../../Status";

import Item from "./Item";

// TODO: Mapear Json

export const Delivery = ({ orderId, className, fulfillments }) =>
  fulfillments.map(
    (
      { id, shipment, locationType, freightCosts, type, items, status },
      key
    ) => {
      const itemsArray = Object.keys(items).map(name => items[name]);
      const itemsLength = itemsArray.length;
      const allItems = itemsArray.reduce(
        (sum, { quantity }) => sum + quantity,
        0
      );
      const subtotal = itemsArray.reduce((sum, { price }) => sum + price, 0);
      const total = subtotal + freightCosts.totalPrice;
      return (
        <Collapse
          key={key}
          className={className}
          header={
            <>
              <Value
                className={styles.collapse}
                label={`Entrega ${id}`}
                color="success"
              >
                {orderId}-{id}
              </Value>
              <Value className={styles.collapse} label="Status da entrega">
                <Status>
                  {status}_{type}
                </Status>
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
            <Value label="Endereço de Entrega" className={styles.andress}>
              {shipment.address1}, {shipment.number} {shipment.city} -{" "}
              {shipment.state}
              <br />
              {shipment.zip}
            </Value>
          </Flex>
          <Flex>
            <div className={styles.company}>
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
              {itemsArray.map(item => (
                <Item
                  {...item}
                  freightCosts={freightCosts.totalPrice / itemsLength}
                  key={item.sku}
                ></Item>
              ))}
              <tr>
                <td colSpan="3"></td>
                <td className={stylesItem.price}>
                  <p className={stylesItem.units}>
                    {allItems} unidades de {itemsLength} itens
                  </p>
                  <p className={stylesItem.values}>
                    <span>Subtotal</span>
                    <span>{moneyFormat(subtotal)}</span>
                  </p>
                  <p className={stylesItem.values}>
                    <span>Frete</span>
                    <span>{moneyFormat(freightCosts.totalPrice)}</span>
                  </p>
                  <div className={stylesItem.second}>
                    <p className={stylesItem.values}>
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
    }
  );

Delivery.defaultProps = {
  fulfillments: []
};

Delivery.propTypes = {
  orderId: PropTypes.any,
  className: PropTypes.string,
  fulfillments: PropTypes.array
};

export default props => {
  const { data = {}, ...status } = useSelector(({ pedido }) => pedido);
  const { id: orderId, fulfillments } = data;
  const fulfillmentsArray = Object.keys(fulfillments || {}).map(
    fulfillment => fulfillments[fulfillment]
  );
  return withContent(Delivery)({
    orderId,
    fulfillments: fulfillmentsArray,
    ...props,
    ...status
  });
};
