import React from "react";
import Flex from "../../Flex";

import styles from "./Delivery.scss";
import moneyFormat from "../../../lib/moneyFormat";

export const Item = ({
  sku,
  quantity,
  name,
  size,
  color,
  image,
  price,
  freightCosts
}) => {
  const totalValue = price * quantity + freightCosts;
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
            <span>Frete</span> <span>{moneyFormat(freightCosts)}</span>
          </p>
          <p className={styles.values}>
            <span>Valor total</span>
            <span>{moneyFormat(totalValue)}</span>
          </p>
        </div>
      </td>
    </tr>
  );
};

export default Item;
