import { combineReducers } from "redux";
import SignUpReducer from "../containers/SignUp/reducer";
// export default combineReducers({
const rootReducer = combineReducers({
  SignUpReducer: SignUpReducer,
});

export default (state, action) => {
  // if (action.type === USER_LOGOUT) {
  //   deleteSessionStorage("user");
  //   return rootReducer(
  //     {
  //       SetConfigurationReducer: { ...state.SetConfigurationReducer },
  //       masterDataReducer: { ...state.masterDataReducer },
  //     },
  //     action
  //   );
  // } else {
  return rootReducer(state, action);
  // }
};
