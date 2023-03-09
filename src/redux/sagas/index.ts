import {all} from 'redux-saga/effects';

import onBoardingSaga from './onBoardingSaga';
import categoriesSaga from './categoriesSaga';

export default function* rootSaga() {
  yield all([...onBoardingSaga, ...categoriesSaga]);
}
