import {combineReducers} from 'redux';
import onBoardingReducer from './onBoarding';
import categoriesReducer from './categories';

const reducers = combineReducers({
  onBoardingReducer: onBoardingReducer,
  categoriesReducer: categoriesReducer,
});

export default reducers;
