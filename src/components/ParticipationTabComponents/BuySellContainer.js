import React from 'react';
import {PrimaryButton} from '@giveth/commons-components';
import CurrencyInput from './CurrencyInput';

const daiUrl = process.env.PUBLIC_URL + '/images/dai.png';
const odysseyUrl = process.env.PUBLIC_URL + '/images/odyssey.svg';


const BuySellContainer = ({token, tokenPrice}) => {

  console.log("TOKEN PRICE", tokenPrice);
  const [isContributeTab, setIsContributeTab] = React.useState(true);

  const [daiValue, setDaiValue] = React.useState(0.0);
  const [tokenValue, setTokenValue] = React.useState(0.0);

  const buyTokens = () => {

  }

  const sellTokens = () => {

  }

  const calculateTokenConversion = (xdaiToConvert) => {
    setDaiValue(xdaiToConvert);
    const conversion = xdaiToConvert / tokenPrice;
    setTokenValue(conversion);
  }

  const calculateXDaiConversion = (tokensToConvert) => {
    setTokenValue(tokensToConvert);
    const conversion = tokensToConvert * tokenPrice;
    setDaiValue(conversion);
  }


  return (
    <div className="buy-sell-container">
      <div className="inner-container">
        <div className="tabs">
          <button
            onClick={() => {
              setDaiValue(0);
              setTokenValue(0);
              setIsContributeTab(true)
            }}
            className={isContributeTab ? "in-focus" : ""} >
            CONTRIBUTE</button>
          <button
            onClick={() => {
              setDaiValue(0);
              setTokenValue(0);
              setIsContributeTab(false)
            }}
            className={!isContributeTab ? "in-focus" : ""} >WITHDRAW</button>
        </div>
        <CurrencyInput
          value={daiValue}
          setValue={calculateTokenConversion}
          label="Input"
          currency="xDAI"
          imageUrl={daiUrl}
          classNames="input"
        />
        <CurrencyInput
          value={tokenValue}
          setValue={calculateXDaiConversion}
          imageUrl={odysseyUrl}
          currency={token}
          label="Output"
        />
        {isContributeTab ?
          <PrimaryButton onClick={buyTokens}>{"Buy " + token + " tokens"}</PrimaryButton> :
          <PrimaryButton onClick={sellTokens}>{"Sell " + token + " tokens"}</PrimaryButton>
        }



      </div>


    </div>
  )
};

export default BuySellContainer;