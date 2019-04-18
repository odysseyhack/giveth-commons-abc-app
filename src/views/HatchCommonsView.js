/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import CampaignParameters from '../components/HatchCurveComponents/CampaignParameters/CampaignParameters';
import CurveParameters from '../components/HatchCurveComponents/CurveParameters/CurveParameters';
import CommunityParameters from '../components/HatchCurveComponents/CommunityParameters/CommunityParameters';
import {commonsViews} from '@giveth/commons-components';
import Launch from '../components/HatchCurveComponents/Launch';
import Use from '../components/ParticipationTabComponents/ParticipationTab';
import {CommonsContext, ViewContext, commonsActions, views, viewActions} from "@giveth/commons-components"


const HatchCommonsContainer = () => {

  const { state, dispatch } = React.useContext(CommonsContext);
  const viewContext = React.useContext(ViewContext);
  const [phase, setPhase] = React.useState(1);

  const [campaignParameters, setCampaignParameters] = React.useState({});
  const [curveParameters, setCurveParameters] = React.useState({});
  const [communityParameters, setCommunityParameters] = React.useState({});

  const initializeTheCommons = (commonsToken) => {
    const newCommons = {
      name: campaignParameters.name,
      description: campaignParameters.description,
      commonsView: commonsViews.participate,
      imageUrl: process.env.PUBLIC_URL + '/images/commons-header.png',
      contributorCount: 0,
      donationsCount: 0,
      tokenName: "GIV",
      isHatchPhase: true,
      curve: commonsToken
    }

    // TODO can this be one dispatch?
    dispatch({ type: commonsActions.initialise, newCommons});

    viewContext.dispatch({type: viewActions.changeView, view: views.currentCommons})

  }

  const getHatchPage = () => {
    switch (phase) {
      case 1:
        return <CampaignParameters onNextPage={(parameters) => {
          setCampaignParameters(parameters);
          setPhase(2)
        }}/>;
      case 2:
        return <CurveParameters onNextPhase={(parameters) => {
          setCurveParameters(parameters);
          setPhase(3);
        }}/>
      case 3:
        return <CommunityParameters curveParameter={curveParameters} campaignParameters={campaignParameters} onNextPhase={(communityParameters) => {
          setCommunityParameters(communityParameters);
          setPhase(4)
        }}/>;
      case 4:
        return <Launch
                 name={campaignParameters.name}
                 curveParameters={curveParameters}
                 communityParameters={communityParameters}
                 initializeCommonsToken={(commonsToken) => initializeTheCommons(commonsToken)}
                />
      default:
        console.log("SHOULD NOT GET HERE BAD PHASE NUMBBER")
    }
  };

  return (
    <div className="hatch-curve-page">
      <div className="hatch-container">
        {getHatchPage()}

      </div>
    </div>

  )
}

export default HatchCommonsContainer;