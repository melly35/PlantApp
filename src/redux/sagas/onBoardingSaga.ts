import {put, call, takeLatest, delay, select} from 'redux-saga/effects';
import ActionTypes from '../actionTypes';

export function* onBoardingSuccess(payload) {
  try {
    yield put({
      type: ActionTypes.onBoarding.ONBOARDING_SUCCESS,
    });
  } catch (error) {
    // console.log('err', error);
  }
}

const onBoardingSaga = [
  takeLatest(ActionTypes.onBoarding.ONBOARDING, onBoardingSuccess),
];

export default onBoardingSaga;
