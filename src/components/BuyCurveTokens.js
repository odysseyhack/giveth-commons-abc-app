/**
 * Created by will on 11/04/19.
 */
import React from 'react';
import {AugmentedCurveContext, UserContext, userActions, curveActions, PrimaryButton} from '@wip-abramson/ecosystem';

const BuyCurveTokens = ({}) => {
  const {state, dispatch} = React.useContext(AugmentedCurveContext);
  const userContext = React.useContext(UserContext);
  const [amount, setAmount] = React.useState("20");

  console.log(userContext);

  const buyTokens = () => {
    const tokenAmount = parseInt(amount);
    console.log(userContext.state.user.totalBalance)
    // TODO this is just an example. Need to figure out actualy price of buying tokens from curve at particular time
    if (userContext.state.user.totalBalance > tokenAmount) {
      dispatch({type: curveActions.buyTokens, amount: tokenAmount})
      // TODO Again this is just an example of what is possible
      // Clerly what the user spends is not the token amount
      // TODO Move user spend action into curve reducer?
      userContext.dispatch({type: userActions.spend, amount: (tokenAmount * state.tokenPrice)})
    } else {
      alert("Not enough funds")
    }
  }

  return userContext.state.user ? (
    <div>
      <h1>{state.curveName}</h1>
      <h2>Current Token Price: {state.tokenPrice}</h2>
      <h2>Current Token Supply: {state.tokenSupply}</h2>
      <input className="eco" value={amount} onChange={(e) => {setAmount(e.target.value)}}/>
      <PrimaryButton onClick={buyTokens} name="Buy Tokens"/>
    </div>
  ) :  (
    <h1>Must Log In to buy tokens</h1>
  )
};

export default BuyCurveTokens;