import React, { Component } from 'react';
import { CommonsStateWrapper } from '@giveth/commons-components';
import User from './components/User';
import BuyCurveTokens from './components/BuyCurveTokens';
import HatchCommonsContainer from './components/HatchCommonsContainer';

const App = () => {

  return (

      <CommonsStateWrapper>
        <HatchCommonsContainer/>

      </CommonsStateWrapper>


  );
}

export default App;
