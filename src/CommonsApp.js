/**
 * Created by will on 16/04/19.
 */
import React from 'react';
import {CommonsTokenContext} from './context/CommonsToken'
import {CommonsNavHeader, ViewContext, views} from '@giveth/commons-components'
import HatchCommonsContainer from './views/HatchCommonsView';
import AllCommonsView from './views/AllCommonsViews';
import SelectedCommonsView from './views/SelectedCommonsView';
import {Milestone} from './components/MilestoneTabComponents/Milestone';

const CommonsApp = () => {

  const {state, dispatch} = React.useContext(ViewContext);

  const getView = () => {
    switch (state.view) {
      case views.allCommons:
        return <AllCommonsView/>
      case views.createCommons:
        return <HatchCommonsContainer/>
      case views.currentCommons:
        return <SelectedCommonsView/>;
      case views.selectedMilestone:
        return <Milestone/>
    }
  }

  return (
    <div className="commons-abc-app">
      <CommonsNavHeader />
      {getView()}
    </div>
  )

};

export default CommonsApp;