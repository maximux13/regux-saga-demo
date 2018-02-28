import { put, takeEvery } from 'redux-saga/effects';

import * as types from './constants';

export function* counterSagas() {
  yield put({ type: types.INCREMENT });
}

export default function* watchCounter() {
  yield takeEvery(types.ASYNC_INCREMENT, counterSagas);
}
