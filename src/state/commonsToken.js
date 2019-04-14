export const initialState = {
  curveName: "null",
  contract: null,
  tokenPrice: 0,
  tokenSupply: 0
};

export const commonsTokenActions = {
  setName: "SET_NAME",
  setContract: "SET_CONTRACT",
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
