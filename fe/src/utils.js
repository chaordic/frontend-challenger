/**
 * Insert and force certain rules to cep (postal code in Brazil)
 *
 * @param value Value inserted by user
 * @return {String} formatted by rules of cep (postal code in Brazil)
 */
export const formatAddress = (objectAddress) => {
  let address = '';

  if (objectAddress.address1 !== undefined && objectAddress.number !== undefined) {
    address =
      address.concat(objectAddress.address1).concat(', ').concat(objectAddress.number);
  }

  if (objectAddress.city !== undefined) {
    address =
      address.concat(' ').concat(objectAddress.city);
  }

  if (objectAddress.state !== undefined) {
    address =
      address.concat(' - ').concat(objectAddress.state);
  }

  if (objectAddress.zip !== undefined) {
    address =
      address.concat(' - ').concat(objectAddress.zip);
  }

  if (objectAddress.country !== undefined) {
    address =
      address.concat(' - ').concat(objectAddress.country);
  }

  return address;
};

/**
 * Insert and force certain rules to cep (postal code in Brazil)
 *
 * @param value Value inserted by user
 * @return {String} formatted by rules of cep (postal code in Brazil)
 */
export const distinctPlaces = (values) => {
  const dicShipping = { };

  values.forEach((element) => {
    const place = formatAddress(element.shipment);
    if (dicShipping[place] === undefined) {
      dicShipping[place] = place;
    }
  });

  return Object.keys(dicShipping);
};

/**
 * Insert and force certain rules to cep (postal code in Brazil)
 *
 * @param value Value inserted by user
 * @return {String} formatted by rules of cep (postal code in Brazil)
 */
export const monthsName = (m) => {
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  return months[m] || undefined;
};

/**
 * Insert and force certain rules to cep (postal code in Brazil)
 *
 * @param value Value inserted by user
 * @return {String} formatted by rules of cep (postal code in Brazil)
 */
export const formatFullDate = (date) => {
  const formattedDate = new Date(date) || new Date().now();

  return `${formattedDate.getDate()} de ${monthsName(formattedDate.getMonth())} de ${formattedDate.getFullYear()}, às ${formattedDate.getHours()}h${formattedDate.getMinutes()}`;
};

/**
 * Insert and force certain rules to cep (postal code in Brazil)
 *
 * @param value Value inserted by user
 * @return {String} formatted by rules of cep (postal code in Brazil)
 */
export const formatDay = (d) => {
  if (d.toString().length > 2) {
    return d;
  }

  return `0${d.toString()}`;
};

/**
 * Insert and force certain rules to cep (postal code in Brazil)
 *
 * @param value Value inserted by user
 * @return {String} formatted by rules of cep (postal code in Brazil)
 */
export const formatMinimumDate = (date) => {
  const formattedDate = new Date(date) || new Date().now();

  return `${formatDay(formattedDate.getDay())}/${formatDay(formattedDate.getMonth() + 1)}/${formattedDate.getFullYear()}`;
};

/**
 * Insert and force certain rules to cep (postal code in Brazil)
 *
 * @param value Value inserted by user
 * @return {String} formatted by rules of cep (postal code in Brazil)
 */
export const formatCash = (value) => {
  const p = value.toFixed(2).split('.');
  return `R$${p[0].split('').reverse().reduce((acc, num, i) => (
    num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc
  ), '')},${p[1]}`;
};

/**
 * Insert and force certain rules to cep (postal code in Brazil)
 *
 * @param value Value inserted by user
 * @return {String} formatted by rules of cep (postal code in Brazil)
 */
export const formatFulfillments = fulfillments => (
  Object.values(fulfillments).map((e) => {
    e.geral = {
      quantity: 0,
      items: 0,
      totalFreight: 0,
      totalPrice: 0,
      total: 0,
    };
    e.updatedAt = formatMinimumDate(e.updatedAt);
    e.createdAt = formatMinimumDate(e.createdAt);
    e.processedAt = formatMinimumDate(e.processedAt);
    e.open = true;

    e.formattedAddress = formatAddress(e.shipment);

    e.freight = { };

    e.freight.deliveryEstimatedDate =
      formatMinimumDate(e.freightCosts.deliveryEstimatedDate);
    e.freight.totalPrice =
      formatCash(e.freightCosts.totalPrice);

    e.items = Object.values(e.items).map((i) => {
      e.geral.totalPrice += i.price;
      e.geral.quantity += i.quantity;

      return {
        ...i,
        desc: `${i.color.length > 0 ? i.color.concat(', ') : i.color}${i.size || ''}`,
        price: formatCash(i.price),
      };
    });

    e.geral.items = e.items.length;
    e.geral.total = formatCash(e.geral.totalFreight + e.geral.totalPrice);
    e.geral.totalFreight = formatCash(e.geral.totalFreight);
    e.geral.totalPrice = formatCash(e.geral.totalPrice);

    return e;
  })
);

export const formatPayments = payments => (
  Object.values(payments).map((p) => {
    const e = p;
    e.amount = formatCash(p.amount);

    return e;
  })
);

/**
 * Export all functions utils (mainaly used in all project)
 */
export default {
  formatAddress,
  distinctPlaces,
  formatFullDate,
  formatMinimumDate,
  formatCash,
  formatFulfillments,
  formatPayments,
};
