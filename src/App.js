import React, { Component } from 'react';
import { CommonsStateWrapper } from '@giveth/commons-components';
import CommonsApp from './CommonsApp';
import { CommonsTokenProvider } from "./context/CommonsToken";

const App = () => {

  return (

    <CommonsStateWrapper>
      <CommonsTokenProvider>
        <CommonsApp/>

      </CommonsTokenProvider>
    </CommonsStateWrapper>
  );
}

export default App;
