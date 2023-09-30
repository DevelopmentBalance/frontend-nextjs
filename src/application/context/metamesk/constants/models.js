export const initialState = {
  wallet: null,
  status: "idle",
  isMetamaskInstalled: false,
};

export const metamaskContextModel = {
  state: initialState,
  dispatch: () => {},
};
