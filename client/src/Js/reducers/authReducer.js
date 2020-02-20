import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_USER
} from '../constants/actions-types';

const initialState = {
  isAuth: false,
  isLoading: false,
  data: []
};
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        isLoading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        data: payload
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        data: payload
      };
    default:
      return state;
  }
};

export default authReducer;
