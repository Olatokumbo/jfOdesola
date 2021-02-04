import * as actionTypes from "../actions/actionTypes";
const initialState = {
  info: null,
};

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_INFO:
      return {
          info: action.info
      };

    default:
      return state;
  }
};

export default infoReducer;