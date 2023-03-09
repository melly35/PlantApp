import {combineReducers} from 'redux';
import onBoardingReducer from './onBoarding';
import categoriesReducer from './categories';
import questionsReducer from './questions';

const reducers = combineReducers({
  onBoardingReducer: onBoardingReducer,
  categoriesReducer: categoriesReducer,
  questionsReducer: questionsReducer,
});

export default reducers;
