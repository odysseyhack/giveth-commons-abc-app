import React, { Component } from 'react';
import { CommonsStateWrapper, CommonsNavHeader } from '@giveth/commons-components';
import HatchCommonsContainer from './components/HatchPage/HatchCommonsContainer';
import { CommonsTokenProvider } from "./context/CommonsToken";

const App = () => {

  return (

    <CommonsStateWrapper>
      <CommonsTokenProvider>
        <CommonsNavHeader/>
        <div className="hatch-curve-page">
            <HatchCommonsContainer/>
        </div>
      </CommonsTokenProvider>
    </CommonsStateWrapper>
  );
}

export default App;
