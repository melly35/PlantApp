import {all} from 'redux-saga/effects';

import onBoardingSaga from './onBoardingSaga';
import categoriesSaga from './categoriesSaga';
import questionsSaga from './questionsSaga';

export default function* rootSaga() {
  yield all([...onBoardingSaga, ...categoriesSaga, ...questionsSaga]);
}
