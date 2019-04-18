import React from "react";
import Milestones from "../components/MilestoneTabComponents/Milestones"
import CurveParticipationTab from '../components/ParticipationTabComponents/ParticipationTab';
import { SelectedCommonsHeader, CommonsContext, commonsViews } from "@giveth/commons-components";;

export default () => {

  const {state, dispatch} = React.useContext(CommonsContext);

  console.log(state)

  const getCommonsPage = () => {
    console.log(state.curve.initialRaise)
    switch (state.commonsView) {
      case commonsViews.about:
        return (<div><h1>{state.name}</h1></div>)
      case commonsViews.participate:
        return <CurveParticipationTab
          fundingPoolPercentage={state.curve.theta / 10000}
          initialRaise={state.curve.initialRaise}
          initialTokenPrice={state.curve.p0}
          tokenName={state.tokenName}
        />
      case commonsViews.milestones:
        return (      <div className="milestones-wrapper">
          <Milestones />
        </div>)
    }
  }

  return (
    <div>
      <SelectedCommonsHeader />
      {getCommonsPage()}
    </div>
  );
}
