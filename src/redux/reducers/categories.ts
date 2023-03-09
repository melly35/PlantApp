import {StackType} from '../../utils/enums';
import ActionTypes from '../actionTypes';

const initialState = {
  categories: [],
  loading: false,
};

export default function (state = initialState, action) {
  const response = action.response;
  
  switch (action.type) {
    case ActionTypes.category.GET_CATEGORIES:
      return {
        ...state,
        loading: true,
        categories: [],
      };
    case ActionTypes.category.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: response,
      };
    case ActionTypes.category.GET_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
