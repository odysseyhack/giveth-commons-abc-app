import React from "react";
import CurveVisualizer from "../CurveVisualizer/CurveVisualizer"
import { PrimaryButton } from '@giveth/commons-components';
const web3 = require("../../integrations/web3");

const Use = ({ name, commonsToken }) => {

  // TODO
  // - graph (supply, price [sell, buy])
  // - buy
  // - sell
  // - balance of user

  const buyTokens = async () => {
    const account = await web3.getAccount();
    console.log("TODO: buy tokens");
    // commonsToken.buy();
  };

  const sellTokens = async () => {
    const account = await web3.getAccount();
    console.log("TODO: sell tokens");
    // commonsToken.sell();
  };

  return (
    <div>
      <CurveVisualizer />
      <PrimaryButton onClick={buyTokens} />
      <PrimaryButton onClick={sellTokens} />
    </div>
  );
}

export default Use;
