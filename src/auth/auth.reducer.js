import { authConstants } from './actions/auth.constants';

const DEFAULT_STATE = {
  user: { email: 'test@dispatchbot.com', password: 'password' },
  isLoggedIn: false,
  invalidUser: true
}

export const authReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case authConstants.SIGN_IN_SUCCESSFULL:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        invalidUser: false
      };
    case authConstants.SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false,
        invalidUser: false
      };
    default:
      return state;
  }
}

export default {
  auth: authReducer
}