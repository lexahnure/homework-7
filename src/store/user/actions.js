export const LOGIN_USER_ASYNC = 'Login user async';
export const login = data => ({ type: LOGIN_USER_ASYNC, data });

export const CHECK_USER_ASYNC = 'Check user async';
export const check = () => ({ type: CHECK_USER_ASYNC });

export const LOGOUT_ASYNC = 'Logout async';
export const logout = () => ({ type: LOGOUT_ASYNC });

export const SET_USER = 'Set user';
export const setUser = data => ({ type: SET_USER, data });

export const UPDATE_USER_ASYNC = 'Update user async';
export const updateUserAsync = data => ({ type: UPDATE_USER_ASYNC, data });
