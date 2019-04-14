import React from "react";
import CurveVisualizer from "../CurveVisualizer/CurveVisualizer";
import { PrimaryButton } from '@giveth/commons-components';
import { CommonsTokenContext } from "../../context/CommonsToken";
import { commonsTokenActions } from "../../state/commonsToken";
import {
  Typography,
  Input,
  InputAdornment
} from "@material-ui/core";

const Use = () => {

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

  return (
    <div>
      <Typography variant="h1">
      {`Name: ${state.name}`}
      </Typography>
      <Typography variant="h2">
      {`Description: ${state.description}`}
      </Typography>
      <CurveVisualizer />
      <Typography variant="h6">
      {`User Balance: ${state.balance}`}
      </Typography>
      <Input
        id="adornment-amount"
        value={buyAmount}
        type="number"
        onChange={event => setBuyAmount(parseInt(event.target.value))}
        startAdornment={
          <InputAdornment position="start">$</InputAdornment>
        } />
      <PrimaryButton onClick={buyTokens}>
      Give
      </PrimaryButton>
      <Input
        id="adornment-amount"
        value={sellAmount}
        type="number"
        onChange={event => setSellAmount(parseInt(event.target.value))}
        startAdornment={
          <InputAdornment position="start">COMN</InputAdornment>
        } />
      <PrimaryButton onClick={sellTokens}>
      Redeem
      </PrimaryButton>
    </div>
  );
}

export default Use;
