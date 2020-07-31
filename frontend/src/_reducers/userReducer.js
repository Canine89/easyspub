import { SET_USER, RESET_USER } from "../_actions/userAction";

const initState = {
  username: null,
  isLoggedIn: false,
};

export default function reducer(state = initState, action) {
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
