/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import CampaignParameters from './CampaignParameters/CampaignParameters';
import CurveParameters from './CurveParameters/CurveParameters';
import CommunityParameters from './CommunityParameters/CommunityParameters';
import Launch from './Launch';
import Use from './Use';
import { CommonsTokenContext } from "../../context/CommonsToken";
import { commonsTokenActions } from "../../state/commonsToken";

const HatchCommonsContainer = () => {

  const { state, dispatch } = React.useContext(CommonsTokenContext);
  const [phase, setPhase] = React.useState(1);

  const [campaignParameters, setCampaignParameters] = React.useState({});
  const [curveParameters, setCurveParameters] = React.useState({});
  const [communityParameters, setCommunityParameters] = React.useState({});

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
                 setCommonsToken={commonsToken => {
                   setPhase(5);
                   dispatch({ type: commonsTokenActions.setContract, contract: commonsToken });
                 }}
                />
      case 5:
        return <Use name={campaignParameters.name} />
      default:
        console.log("SHOULD NOT GET HERE BAD PHASE NUMBBER")
    }
  };

  return (
    <div className="hatch-container">
      {getHatchPage()}

    </div>
  )
}

export default HatchCommonsContainer;