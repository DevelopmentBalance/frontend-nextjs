import { METAMASK_ACTIONS } from "./constants";

export const metamaskReducer = (state, action) => {
  if (!action.type) throw new Error("No action specified");

  const keyActions = Object.keys(METAMASK_ACTIONS);

  if (!keyActions.includes(action.type))
    throw new Error("Unhandled action type");

  const REDUCERS = {
    [METAMASK_ACTIONS.CONNECT]: () => ({
      ...state,
      ...action.payload,
    }),
    [METAMASK_ACTIONS.DISCONNECT]: () => ({
      ...state,
      ...action.payload,
    }),
    [METAMASK_ACTIONS.PAGE_LOADED]: () => ({
      ...state,
      ...action.payload,
    }),
    [METAMASK_ACTIONS.LOADING]: () => ({
      ...state,
      ...action.payload,
    }),
  };

  return REDUCERS[action.type]();
};
