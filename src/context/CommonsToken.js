import React from "react";
import { reducer, initialState, commonsTokenActions } from "../state/commonsToken";

export const CommonsTokenContext = React.createContext();

export function CommonsTokenProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <CommonsTokenContext.Provider value={value}>
    {children}
  </CommonsTokenContext.Provider>
}

export default CommonsTokenProvider;
