import {put, call, takeLatest, delay, select} from 'redux-saga/effects';
import ActionTypes from '../actionTypes';

import {GetCategories} from '../../api/categories';

export function* getCategories(payload) {
  try {
    const response = yield call(GetCategories);
    if (response.success) {
      console.log('response', response.data);
      yield put({
        type: ActionTypes.category.GET_CATEGORIES_SUCCESS,
        response: response.data,
      });
    } else {
      yield put({type: ActionTypes.category.GET_CATEGORIES_ERROR});
    }
  } catch (error) {
    console.log('err2', error);
  }
}

const categoriesSaga = [
  takeLatest(ActionTypes.category.GET_CATEGORIES, getCategories),
];

export default categoriesSaga;
