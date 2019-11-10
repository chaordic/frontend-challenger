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
 * Export all functions utils (mainaly used in all project)
 */
export default {
  formatAddress,
};
