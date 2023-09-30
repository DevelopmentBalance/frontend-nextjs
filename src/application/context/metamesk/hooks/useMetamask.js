import { useContext } from "react";

import { MetaMaskContext } from "../metamaskContext";
import { METAMASK_ACTIONS } from "../constants";

export const useMetamask = () => {
  const { state, dispatch } = useContext(MetaMaskContext);

  const saveConnect = (wallet) => {
    dispatch({
      type: METAMASK_ACTIONS.CONNECT,
      payload: {
        wallet,
      },
    });
  };

  const setLoading = (loading) => {
    dispatch({
      type: METAMASK_ACTIONS.LOADING,
      payload: {
        loading,
      },
    });
  };

  const getBalance = async (typeCoin = "eth_getBalance") => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const balance = await window.ethereum.request({
      method: typeCoin,
      params: [accounts[0], "latest"],
    });

    // dispatch({
    //   type: METAMASK_ACTIONS.CONNECT,
    //   payload: {
    //     balance,
    //   },
    // });

    return balance;
  };

  return {
    ...state,
    dispatch,
    saveConnect,
    setLoading,
    getBalance,
  };
};
