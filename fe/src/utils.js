/**
 * Insert and force certain rules to cep (postal code in Brazil)
 *
 * @param value Value inserted by user
 * @return {String} formatted by rules of cep (postal code in Brazil)
 */
export const cepMask = value => (
  value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
);

/**
 * Export all functions utils (mainaly used in all project)
 */
export default {
  cepMask,
};
