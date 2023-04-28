import { USER_ACTIONS } from "./constants";

export const UserReducer = (state, action) => {
  if (!action.type) throw new Error("No action specified");

  const USER_REDUCERS = {
    [USER_ACTIONS.SET_USER]: () => ({
      ...state,
      user: {
        ...state.user,
        ...action.payload,
      },
      userUpdated: true,
      isLoading: false,
    }),
    [USER_ACTIONS.SET_LOADING]: () => ({
      ...state,
      isLoading: action.payload,
    }),
    [USER_ACTIONS.SET_USER_UPDATE]: () => ({
      ...state,
      userUpdated: action.payload,
    }),
  };

  return USER_REDUCERS[action.type]();
};
