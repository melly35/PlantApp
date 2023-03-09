import ActionTypes from '../actionTypes';

const onBoardingSuccess = (payload: any) => {
  return {
    type: ActionTypes.onBoarding.ONBOARDING,
    payload,
  };
};

const onBoardingAction = {
  onBoardingSuccess,
};

export default onBoardingAction;
