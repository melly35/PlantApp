import {Action} from 'redux';
import {StackType} from '../../utils/enums';
import ActionTypes from '../actionTypes';

const initialState = {
  stack: StackType.Onboarding,
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.onBoarding.ONBOARDING:
      return {
        ...state,
        stack: StackType.Onboarding,
      };
    case ActionTypes.onBoarding.ONBOARDING_SUCCESS:
      return {
        ...state,
        stack: StackType.App,
      };
    case ActionTypes.onBoarding.ONBOARDING_ERROR:
      return {
        ...state,
        stack: StackType.Onboarding,
      };

    default:
      return state;
  }
}
