/**
 * Created by will on 10/04/19.
 */
import React from 'react';
import { UserContext, userActions, PrimaryButton, DaiAction } from '@giveth/commons-components';

const User = () => {
  const {state, dispatch} = React.useContext(UserContext);
  const [amount, setAmount] = React.useState("20");

  const spendMoney = () => {
    // console.log()

    dispatch({type: userActions.spend, amount});
  }

  return state.user ? (
    <div>
      <h1>{state.user.name}</h1>
      <input className="eco" value={amount} onChange={(e) => {setAmount(e.target.value)}}/>
      <PrimaryButton onClick={spendMoney} name="Spend Money"/>
      <DaiAction buttonName="TEST DAI" actionText="Testing Ecosystem Component Integration"/>
    </div>
  ) :  (
    <h1>Not Logged In</h1>
  )

}

export default User;