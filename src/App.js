import React, { Component } from 'react';
import { CommonsStateWrapper, CommonsNavHeader } from '@giveth/commons-components';
import HatchCommonsContainer from './components/HatchCommonsContainer';

const App = () => {

  return (

      <CommonsStateWrapper>
        <CommonsNavHeader/>
        <HatchCommonsContainer/>
      </CommonsStateWrapper>
  );
}

export default App;
