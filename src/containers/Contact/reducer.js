import { SET_USER_LOGGED_IN } from "../../redux/actionTypes";

export default function ContactReducer(
  state = {
    user: {},
  },
  action
) {
  switch (action.type) {
    case SET_USER_LOGGED_IN:
      return Object.assign({}, state, {
        user: action.data,
        invalidLogin: action.data.invalidLogin,
        serverError: action.data.serverError,
      });

    default:
      return state;
  }
}
