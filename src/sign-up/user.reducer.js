import { userConstants } from './actions/user.constants';

const DEFAULT_STATE = {
  user: { },
}

export const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case userConstants.SIGN_UP:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}

export default {
  user: userReducer
}