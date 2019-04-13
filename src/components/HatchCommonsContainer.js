/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import CampaignParameters from './CampaignParameters';
import CurveParameters from './CurveParameters';
import CommunityParameters from './CommunityParameters';


const HatchCommonsContainer = () => {

  const [phase, setPhase] = React.useState(1);

  const [campaignParameters, setCampaignParameters] = React.useState({});
  const [curveParameters, setCurveParameters] = React.useState({});


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
        return <CommunityParameters onLaunchCommons={(communityParameters) => {
          launchCommons(communityParameters)
        }}/>;
      default:
        console.log("SHOULD NOT GET HERE BAD PHASE NUMBBER")

    }
  };

  const launchCommons = (communityParameters) => {
    console.log(campaignParameters)
    console.log(curveParameters)
    console.log(communityParameters)
  }

  return (
    <div className="hatch-container">
      {getHatchPage()}

    </div>
  )
}

export default HatchCommonsContainer;