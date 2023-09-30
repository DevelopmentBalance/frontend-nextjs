import React, { createContext, useReducer, useEffect } from "react";

import { metamaskReducer } from "./metamaskReducer";
import { initialState, metamaskContextModel } from "./constants/models";
import { METAMASK_ACTIONS } from "./constants";

export const MetaMaskContext = createContext(metamaskContextModel);

export const MetaMaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(metamaskReducer, initialState);
  const value = { state, dispatch };

  useEffect(() => {
    if (typeof window !== undefined) {
      const ethereumProviderInjected = typeof window.ethereum !== "undefined";

      const isMetamaskInstalled =
        ethereumProviderInjected && Boolean(window.ethereum.isMetaMask);

      dispatch({ type: METAMASK_ACTIONS.PAGE_LOADED, isMetamaskInstalled });
    }
  }, []);

  return (
    <MetaMaskContext.Provider value={value}>
      {children}
    </MetaMaskContext.Provider>
  );
};
