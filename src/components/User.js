/**
 * Created by will on 10/04/19.
 */
import React from 'react';
import { UserContext, userActions } from '@wip-abramson/ecosystem';

const User = () => {
  const {state, dispatch} = React.useContext(UserContext);
  console.log(state)

  const spendMoney = (amount) => {
    dispatch({type: userActions.spend, amount: 5000});
  }

  return state.user ? (
    <div>
      <h1>{state.user.name}</h1>
      <button className="eco primary" onClick={spendMoney}>Spend Money</button>
    </div>
  ) :  (
    <h1>Not Logged In</h1>
  )

}

export default User;