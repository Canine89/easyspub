import { SET_USER, RESET_USER } from "../actions/userAction";

const initState = {
  isLoggedIn: localStorage.getItem("jwt") || false,
};

function reducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_USER: {
      return payload;
    }
    case RESET_USER: {
      return initState;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
