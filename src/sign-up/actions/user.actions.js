import { userConstants } from './user.constants';

export const userActions = {
  signUp
}

function signUp(user) {
  return {
    type: userConstants.SIGN_UP,
    payload: user
  };
}
