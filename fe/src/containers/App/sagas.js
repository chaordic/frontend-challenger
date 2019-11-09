import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { requestOrder } from './api';
import C from './constants';

/**
 * Trigged when Cep Request is demmanded
*/
function* fetchOrder() {
  try {
    const { id } = yield select(state => state.app);

    const response = yield call(requestOrder, id);

    if (response.status === 200 && response.data) {
      yield put({ type: C.FETCH_ORDER_SUCCESS, data: response.data });
    } else {
      throw response.status;
    }
  } catch (error) {
    yield put({ type: C.FETCH_ORDER_FAILURE, error: error.response.status });
  }
}


function* getAppData() {
  yield takeLatest(C.FETCH_ORDER_REQUEST, fetchOrder);
}

export default getAppData;
