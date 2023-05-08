import { useContext } from "react";

import { UserContext } from "../userContext";
import { USER_ACTIONS } from "../constants";

export const useUser = () => {
  const { state, dispatch } = useContext(UserContext);

  const setUser = (payload) => {
    dispatch({
      type: USER_ACTIONS.SET_USER,
      payload,
    });
  };

  const setLoading = (payload) => {
    dispatch({
      type: USER_ACTIONS.SET_LOADING,
      payload,
    });
  };

  const setUserUpdate = (payload) => {
    dispatch({
      type: USER_ACTIONS.SET_USER_UPDATE,
      payload,
    });
  };

  return {
    user: state.user,
    setUser,
    userUpdated: state.userUpdated,
    setUserUpdate,
    setLoading,
    isLoading: state.isLoading,
  };
};
