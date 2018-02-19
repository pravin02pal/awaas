import { authConstants } from './actions/auth.constants';

export const authMiddleware = store => next => action => {
  switch (action.type) {
    case authConstants.SIGN_IN:
      return next(signInUser(store.getState().authReducer.user, action));
    default:
      return next(action);
  }

  function signInUser(user, action) {
    if (user && user.password === "password") {
      return {type: authConstants.SIGN_IN_SUCCESSFULL, payload: action.payload};
    } else {
      return {type: authConstants.INVALID_USER, payload: action.payload};
    }
  }
}