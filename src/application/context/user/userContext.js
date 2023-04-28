import { useRouter } from "next/router";
import React, { createContext, useReducer, useEffect } from "react";

import { getUser } from "@/infrastructure/services/user-service";
import { useApp } from "@/application/context";

import {
  USER_ACTIONS,
  initialStateContext,
  userContextModel,
} from "./constants";
import { UserReducer } from "./userReducer";

const UserContext = createContext(userContextModel);

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(UserReducer, initialStateContext);

  const { push } = useRouter();
  const { showToastMessage } = useApp();

  useEffect(() => {
    if (!state.userUpdated) {
      getUser()
        .then((response) => {
          dispatch({
            type: USER_ACTIONS.SET_USER,
            payload: response,
          });
        })
        .catch((error) => {
          if (error?.response?.data?.detail === "Signature has expired") {
            push("/");
          }
          showToastMessage(error || "Erro na autenticação", "msgError");
        });
    }
  }, [state.userUpdated]);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
