import React from "react";
import CurveVisualizer from "../CurveVisualizer/CurveVisualizer";
import { CommonsTokenContext } from "../../context/CommonsToken";
import { commonsTokenActions } from "../../state/commonsToken";
import BuySellContainer from './BuySellContainer';

const CurveParticipationTab = ({fundingPoolPercentage, initialRaise, initialTokenPrice, tokenName}) => {

  // TODO
  // - graph (supply, price [sell, buy])
  // - buy
  // - sell
  // - balance of user

  const { state, dispatch } = React.useContext(CommonsTokenContext);
  const [buyAmount, setBuyAmount] = React.useState(0);
  const [sellAmount, setSellAmount] = React.useState(0);

  const buyTokens = () => {
    dispatch({
      type: commonsTokenActions.buyTokens,
      data: {
        amount: buyAmount,
        contract: state.contract,
        balance: state.balance
      }
    });
  };

  const sellTokens = () => {
    dispatch({ type: commonsTokenActions.sellTokens, amount: sellAmount });
  };

  console.log("CURVE", fundingPoolPercentage, initialRaise, initialTokenPrice)

  return (
    <div>

      <div className="hatch-curve-overview-page">
        <BuySellContainer
          tokenPrice={initialTokenPrice}
          token={tokenName} />

        <CurveVisualizer theta={fundingPoolPercentage}
                         initialRaise={initialRaise}
                         startPrice={initialTokenPrice}  />
      </div>

    </div>
  );
}

export default CurveParticipationTab;
