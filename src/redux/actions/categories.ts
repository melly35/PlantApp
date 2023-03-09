import ActionTypes from '../actionTypes';

const getCategories = () => {
  return {
    type: ActionTypes.category.GET_CATEGORIES,
  };
};

const categoryAction = {
  getCategories,
};

export default categoryAction;
