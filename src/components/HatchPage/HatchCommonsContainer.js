/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import CampaignParameters from './CampaignParameters/CampaignParameters';
import CurveParameters from './CurveParameters/CurveParameters';
import CommunityParameters from './CommunityParameters/CommunityParameters';
import Launch from './Launch';
import HatchProgressContainer from './HatchProgressContainer';
import CommonsToken from "@giveth/commons-abc-lib";
const protocol = require("../../integrations/protocol");
const web3 = require("../../integrations/web3");

const HatchCommonsContainer = () => {

  const [phase, setPhase] = React.useState(1);

  const [campaignParameters, setCampaignParameters] = React.useState({});
  const [curveParameters, setCurveParameters] = React.useState({});
  const [communityParameters, setCommunityParameters] = React.useState({});
  const [commonsToken, setCommonsToken] = React.useState(null);

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
        return <Launch name={campaignParameters.name} curveParameters={curveParameters} communityParameters={communityParameters} />
      default:
        console.log("SHOULD NOT GET HERE BAD PHASE NUMBBER")

    }
  };

  const launchCommons = async (communityParameters) => {
    console.log("UPHERE");
    const commonsToken = await CommonsToken.deploy(
      await web3.getAccount(),
      await protocol.getReserveToken(),
      142857, // reserveRatio = kappa ~ 6
      15000000000, // 15gwei
      curveParameters.fundingPoolPercentage * 10000, // % in ppm
      curveParameters.initialTokenPrice,
      curveParameters.initialRaise,
      await protocol.getFundingPool(),
      communityParameters.exitFee * 10000 // % in ppm
    );

    console.log("HERE");
    console.log(commonsToken);

    setCommonsToken(commonsToken);

    console.log(campaignParameters) // name, description
    console.log(curveParameters) // initialRaise, fundingPoolPercentage, initialTokenPrice
    console.log(communityParameters) // minimumContribution, time, convicationTime
  }

  return (
    <div className="hatch-container">
      {getHatchPage()}

    </div>
  )
}

export default HatchCommonsContainer;