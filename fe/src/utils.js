/**
 * Format to portuguese shop status
 *
 * @param {String} status Status in english
 * @return {String} Status in portuguese
 */
export const convertStatus = (status) => {
  const statusPtBr = {
    PENDING: 'PENDENTE',
    SHIPMENT: 'ENVIADO',
    DELIVERED: 'ENTREGUE',
    ACTIVE: 'ATIVO',
    PHYSICAL: 'FÍSICO',
    PURCHASE: 'COMPRA',
  };

  return statusPtBr[status];
};
/**
 * Insert object with fiels to human format to address
 *
 * @param {Object} address Formatted Address with better visualizarion
 * @return {String} formatted by rules of better format
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
 * Array of objects to format your address and return in array all distinc addresses
 *
 * @param {Array} values Objects with all informations about address unformatted could be equals
 * @return {Array} Array with distinct formatted addresses
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
 * Based in number 0-11 return in Portuguese what month related
 *
 * @param {Number} m Month in number starting of zero
 * @return {String} Name of the month
 */
export const monthsName = (m) => {
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  return months[m] || undefined;
};

/**
 * Format day format if just have one digit
 *
 * @param {Number} d Day/month
 * @return {String} Day/Month formatted for better visualization
 */
export const formatDay = (d) => {
  if (d.toString().length > 1) {
    return d;
  }

  return `0${d.toString()}`;
};

/**
 * Format date of necessary to better visualization
 *
 * @param {String} date Date saved in string using global pattern
 * @param {Bool} full What format should be returned
 * @return {String} Date formatted
 */
export const formatDate = (date, full = true) => {
  const formattedDate = new Date(date) || new Date().now();

  if (full) {
    return `${formattedDate.getDate()} de ${monthsName(formattedDate.getMonth())} de ${formattedDate.getFullYear()}, às ${formattedDate.getHours()}h${formattedDate.getMinutes()}`;
  }

  return `${formatDay(formattedDate.getDay())}/${formatDay(formattedDate.getMonth() + 1)}/${formattedDate.getFullYear()}`;
};

/**
 * Format cash values to brazilian currency values
 *
 * @param {Number} value Value (mainly price of one thing)
 * @return {String} Price with currency coin and formatted for better visualizartion
 */
export const formatCash = (value, currency = 'R$') => {
  const p = value.toFixed(2).split('.');
  return `${currency}${p[0].split('').reverse().reduce((acc, num, i) => (
    num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc
  ), '')},${p[1]}`;
};

/**
 * Format object fulfillment and your inside objects/array
 *
 * @param {Array} fulfillments Array of fulfillments
 * @return {Array} Array with formatted fulfillments
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

    e.status = convertStatus(e.status);
    e.type = convertStatus(e.type);

    e.updatedAt = formatDate(e.updatedAt, false);
    e.createdAt = formatDate(e.createdAt, false);
    e.processedAt = formatDate(e.processedAt, false);
    e.open = true;

    e.formattedAddress = formatAddress(e.shipment);

    e.freight = { };

    e.freight.deliveryEstimatedDate =
      formatDate(e.freightCosts.deliveryEstimatedDate, false);
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

/**
 * Format sets of payments and return array formatted
 *
 * @param {Array} payments Array of payments
 * @return {Array} Array with formatted payments
 */
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
  formatDate,
  formatCash,
  formatFulfillments,
  formatPayments,
  convertStatus,
};
