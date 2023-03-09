import ActionTypes from '../actionTypes';

const onBoardingSuccess = () => {
  return {
    type: ActionTypes.onBoarding.ONBOARDING,
  };
};

const onBoardingAction = {
  onBoardingSuccess,
};

export default onBoardingAction;
