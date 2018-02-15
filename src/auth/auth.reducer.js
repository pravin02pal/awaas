import { authConstants } from './actions/auth.constants';

const DEFAULT_STATE = {
  user: {},
  isLoggedIn: false
}

export const authReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case authConstants.SIGN_IN_SUCCESSFULL:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}

export default {
  auth: authReducer
}