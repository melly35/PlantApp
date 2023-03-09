import {put, call, takeLatest, delay, select} from 'redux-saga/effects';
import ActionTypes from '../actionTypes';

import {GetQuestions} from '../../api/categories';

export function* getQuestions(payload) {
  try {
    const response = yield call(GetQuestions);
    if (response.success) {
      console.log('getQuestions', response.data);
      yield put({
        type: ActionTypes.questions.GET_QUESTIONS_SUCCESS,
        response: response.data,
      });
    } else {
      yield put({type: ActionTypes.questions.GET_QUESTIONS_ERROR});
    }
  } catch (error) {
    console.log('err2', error);
  }
}

const questionsSaga = [
  takeLatest(ActionTypes.questions.GET_QUESTIONS, getQuestions),
];

export default questionsSaga;
