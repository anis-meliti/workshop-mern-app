import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_USER
} from '../constants/actions-types';

export const registerUser = cred => async dispatch => {
  dispatch({
    type: REGISTER_USER
  });
  try {
    const registerRes = await axios.post('/register', cred);
    if (registerRes.status === 200)
      return dispatch({
        type: REGISTER_SUCCESS,
        payload: registerRes.data
      });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data
    });
  }
};
