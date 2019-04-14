import React, { useCallback } from "react";
import { reducer, initialState, commonsTokenActions } from "../state/commonsToken";
const Web3 = require("../integrations/web3");

export const CommonsTokenContext = React.createContext();

export function CommonsTokenProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const customDispatch = useCallback(async (action) => {
    switch (action.type) {
      case commonsTokenActions.setContract: {
        const contract = action.contract;
        const account = await Web3.getAccount();
        const balance = await contract.balanceOf(account, account);
        dispatch(action);
        dispatch({ type: commonsTokenActions.setBalance, balance });
        break;
      }
      default:
        dispatch(action);
    }
  }, []);

  const value = { state, dispatch: customDispatch };
  return <CommonsTokenContext.Provider value={value}>
    {children}
  </CommonsTokenContext.Provider>
}

export default CommonsTokenProvider;
