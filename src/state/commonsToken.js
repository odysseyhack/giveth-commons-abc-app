const Web3 = require("../integrations/web3");

export const initialState = {
  curveName: "null",
  contract: null,
  tokenPrice: 0,
  tokenSupply: 0,
  balance: 0
};

export const commonsTokenActions = {
  setName: "SET_NAME",
  setContract: "SET_CONTRACT",
  setBalance: "SET_BALANCE",
  buyTokens: "BUY",
  sellTokens: "SELL"
};

export function reducer(state, action) {
  switch (action.type) {
    case commonsTokenActions.setName:
      return {
        ...state,
        curveName: action.name
      };
    case commonsTokenActions.setContract:
      return {
        ...state,
        contract: action.contract
      };
    case commonsTokenActions.setBalance:
      return {
        ...state,
        balance: action.balance
      };
    case commonsTokenActions.buyTokens:
      // TODO:
      // buy tokens
      // return value + get new values
      // update state
      return state;
      break;
    case commonsTokenActions.sellTokens:
      // TODO:
      // sell tokens
      // return value + get new values
      // update state
      return state;
      break;
  }
}
