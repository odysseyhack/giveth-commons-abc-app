import React, { Component } from 'react';
import { CommonsStateWrapper, CommonsNavHeader } from '@giveth/commons-components';
import HatchCommonsContainer from './components/HatchPage/HatchCommonsContainer';

const App = () => {

  return (

      <CommonsStateWrapper>
        <CommonsNavHeader/>
        <div className="hatch-curve-page">
            <HatchCommonsContainer/>
        </div>
      </CommonsStateWrapper>
  );
}

export default App;
