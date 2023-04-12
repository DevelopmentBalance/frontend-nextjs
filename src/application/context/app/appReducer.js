import { APP_ACTIONS } from "./constants";

export const appReducer = (state, action) => {
  if (!action.type) throw new Error("No action specified");

  const REDUCERS = {
    [APP_ACTIONS.SET_MESSAGE]: () => ({
      ...state,
      ...action.payload,
    }),
    [APP_ACTIONS.SET_IS_LOADING]: () => ({
      ...state,
      ...action.payload,
    }),
    [APP_ACTIONS.SET_VIEW_BALANCE]: () => ({
      ...state,
      ...action.payload,
    }),
  };

  return REDUCERS[action.type]();
};
