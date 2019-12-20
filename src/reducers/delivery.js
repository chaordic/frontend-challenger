import actionTypes from "../constant/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  data: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DELIVERY:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case actionTypes.FETCH_DELIVERY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case actionTypes.FETCH_DELIVERY_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case actionTypes.CLEAR_DELIVERY:
      return initialState;
    default:
      return state;
  }
};
