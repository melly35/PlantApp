import ActionTypes from '../actionTypes';

const getQuestions = () => {
  return {
    type: ActionTypes.questions.GET_QUESTIONS,
  };
};

const questionAction = {
  getQuestions,
};

export default questionAction;
