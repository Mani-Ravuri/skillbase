import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  login: {
    isLoggedIn: "",
}
}


export const Profile = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `${actionTypes.IS_LOGEDIN}`:
        return {
            state,
            login : {...state.login , isLoggedIn: action.payload}
        }
    default:
      return state;
  }
};