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
    dispatch({ type: commonsTokenActions.buyTokens, buyAmount });
  };

  const sellTokens = () => {
    dispatch({ type: commonsTokenActions.sellTokens, sellAmount });
  };

  return (
    <div>
      <Typography variant="h1">
      {`Name: ${state.curveName}`}
      </Typography>
      <CurveVisualizer />
      <Typography variant="h4">
      {`User Balance: ${state.balance}`}
      </Typography>
      <Input
        id="adornment-amount"
        value={buyAmount}
        type="number"
        onChange={event => setBuyAmount(event.target.value)}
        startAdornment={
          <InputAdornment position="start">$</InputAdornment>
        } />
      <PrimaryButton onClick={buyTokens} />
      <Input
        id="adornment-amount"
        value={sellAmount}
        type="number"
        onChange={event => setSellAmount(event.target.value)}
        startAdornment={
          <InputAdornment position="start">COMN</InputAdornment>
        } />
      <PrimaryButton onClick={sellTokens} />
    </div>
  );
}

export default Use;
