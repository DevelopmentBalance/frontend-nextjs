import React, { createContext, useReducer } from "react";
import { appReducer } from "./appReducer";
import { appContextModel, initialState } from "./constants";

import { userSessionStorage } from "@/infrastructure/services/user-session-storage";

export const AppContext = createContext(appContextModel);

export function AppProvider({ children }) {
  const { getItemSession } = userSessionStorage();

  const initialStateFormatted = { initialState, ...getItemSession("app") };

  const [state, dispatch] = useReducer(appReducer, initialStateFormatted);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
