import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { requestOrder } from './api';
import {
  distinctPlaces,
  formatDate,
  formatCash,
  formatFulfillments,
  formatPayments,
  convertStatus,
} from '../../utils';
import C from './constants';

/**
 * Trigged when Order is requested and all format is necessary to store
*/
function* fetchOrder() {
  try {
    const { id } = yield select(state => state.app);

    const response = yield call(requestOrder, id);

    if (response.status === 200 && response.data) {
      try {
        const totals = { };

        Object.keys(response.data.totals).forEach((e) => {
          totals[e] = formatCash(response.data.totals[e]);
        });

        yield put({
          type: C.SET_TOTALS_SUCCESS,
          data: totals,
        });
      } catch (e) {
        yield put({
          type: C.SET_TOTALS_ERROR,
        });
      }

      try {
        const fulfillments = formatFulfillments(response.data.fulfillments);

        yield put({
          type: C.SET_FULFILLMENTS_SUCCESS,
          data: fulfillments,
        });
      } catch (e) {
        yield put({
          type: C.SET_FULFILLMENTS_ERROR,
        });
      }

      try {
        const payments = formatPayments(response.data.payments);

        yield put({
          type: C.SET_PAYMENT_SUCCESS,
          data: payments,
        });
      } catch (e) {
        yield put({
          type: C.SET_PAYMENT_ERROR,
        });
      }

      response.data.status = convertStatus(response.data.status);
      yield put({
        type: C.SET_ORDER_SUCCESS,
        data: response.data,
        created: formatDate(response.data.createdAt),
      });

      yield put({
        type: C.SET_BILLINGADDRESS_SUCCESS,
        data: response.data.billingAddress,
      });

      yield put({
        type: C.SET_FULFILLMENTS_SHIPPLACES_SUCCESS,
        data: distinctPlaces(Object.values(response.data.fulfillments)),
      });

      yield put({
        type: C.SET_CUSTOMER_SUCCESS,
        data: response.data.customer,
      });
    } else {
      throw response.status;
    }
  } catch (error) {
    yield put({ type: C.FETCH_ORDER_FAILURE, error: error.response.status });
  }
}

/**
 * Toggle fulfillment by user trigger
 *
 * @param {Object} data Object with id of fulfillment
 */
function* toggleShip(data) {
  const { fulfillments } = yield select(state => state.app);
  const idxFulfillment = fulfillments.items.findIndex(e => e.id === data.params);

  fulfillments.items[idxFulfillment].open = !fulfillments.items[idxFulfillment].open;

  yield put({
    type: C.SET_FULFILLMENTS_SUCCESS,
    data: fulfillments.items,
  });
}

function* getAppData() {
  yield takeLatest(C.FETCH_ORDER_REQUEST, fetchOrder);
  yield takeLatest(C.TOGGLE_SHIP, toggleShip);
}

export default getAppData;
