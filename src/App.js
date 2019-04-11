import React, { Component } from 'react';
import { EcosystemWrapper } from '@wip-abramson/ecosystem';
import User from './components/User';
import BuyCurveTokens from './components/BuyCurveTokens';

const App = () => {

  return (

      <EcosystemWrapper>

        <User/>

        <BuyCurveTokens/>

      </EcosystemWrapper>


  );
}

export default App;
