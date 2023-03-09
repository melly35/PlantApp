import ActionTypes from '../actionTypes';

const initialState = {
  questions: [],
  loading: false,
};

export default function (state = initialState, action) {
  const response = action.response;

  switch (action.type) {
    case ActionTypes.questions.GET_QUESTIONS:
      return {
        ...state,
        loading: true,
        questions: [],
      };
    case ActionTypes.questions.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: response,
      };
    case ActionTypes.questions.GET_QUESTIONS_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
