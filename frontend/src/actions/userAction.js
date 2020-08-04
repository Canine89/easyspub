export const SET_USER = "user/SET_USER";
export const RESET_USER = "user/RESET_USER";

export const setUser = (username, password, token) => ({
  type: SET_USER,
  payload: { username, password, token },
});

export const resetUser = () => ({
  type: RESET_USER,
});
