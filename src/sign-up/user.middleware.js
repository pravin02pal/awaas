import { userConstants } from './actions/user.constants';

export const userMiddleware = store => next => action => {
  switch (action.type) {
    case userConstants.SIGN_UP:
      return next(action);
    default:
      return next(action);
  }
}