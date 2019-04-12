import React, { Component } from 'react';
import { CommonsStateWrapper, CampaignHeader } from '@giveth/commons-components';
import User from './components/User';
import BuyCurveTokens from './components/BuyCurveTokens';

const App = () => {

  return (

      <CommonsStateWrapper>
        <CampaignHeader/>

        <User/>

        <BuyCurveTokens/>

      </CommonsStateWrapper>


  );
}

export default App;
