import { fork } from 'redux-saga/effects';
import appSaga from './containers/App/sagas';

const sagas = [
  appSaga,
];

/**
 * Describe all sagas used in project
 */
export default function* root() {
  yield sagas.map(saga => fork(saga));
}
