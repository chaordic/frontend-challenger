import C from './constants';

/**
 * Request to Order
 * @param params Info passed by user with your id
 * @return {Promise} yield to store information
 */
export const fetchOrder = params => ({
  type: C.FETCH_ORDER_REQUEST,
  params,
});

/**
 * Action to Toggle Ship Component
 * @param params Info passed by user with your id
 * @return {Promise} yield to store information
 */
export const toggleShip = params => ({
  type: C.TOGGLE_SHIP,
  params,
});

