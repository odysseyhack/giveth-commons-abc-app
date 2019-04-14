/**
 * Created by will on 13/04/19.
 */
import React from 'react';
import {PrimaryButton} from '@giveth/commons-components';
const abcLib = require("@giveth/commons-abc-lib");
const protocol = require("../../integrations/protocol");
const web3 = require("../../integrations/web3");

const Launch = ({name, curveParameters, communityParameters, setCommonsToken }) => {

  const [launching, setLaunchingFlag] = React.useState(false);

  const launchCommons = async () => {
    setLaunchingFlag();

    const account = await web3.getAccount();
    const reserveToken = await protocol.getReserveToken();
    const fundingPool = await protocol.getFundingPool();

    console.log(curveParameters) // initialRaise, fundingPoolPercentage, initialTokenPrice
    console.log(communityParameters) // minimumContribution, time, convicationTime

    const commonsToken = await abcLib.CommonsToken.deploy(
      account,
      reserveToken,
      142857, // reserveRatio = kappa ~ 6
      15000000000, // 15gwei
      Math.ceil(curveParameters.fundingPoolPercentage * 10000), // % in ppm
      Math.ceil(curveParameters.initialTokenPrice),
      Math.ceil(curveParameters.initialRaise),
      fundingPool,
      Math.ceil(communityParameters.exitFee * 10000), // % in ppm
      Math.ceil(communityParameters.hatchSalePeriod),
      Math.ceil(communityParameters.minimumContribution)
    );

    setCommonsToken(commonsToken);
  }

  return (
    <div className="launch-commons">
      <span>{name}</span>
      <div className="curve-parameters">
        <div>Initial Raise : <b>{curveParameters.initialRaise}</b></div>
        <div>Initial Price Point : <b>{curveParameters.initialTokenPrice}</b></div>
        <div>Funding Pool : <b>{curveParameters.fundingPoolPercentage}</b></div>
      </div>
      <span className="community-parameters">
        <div>Minimum contribution : <b>{communityParameters.minimumContribution}</b></div>
        <div>Hatch Sale Period : <b>{curveParameters.fundingPoolPercentage}</b></div>
        <div>Proposal duration : <b>{communityParameters.proposalDuration}</b></div>
        <div>Exit fee : <b>{communityParameters.exitFee}</b></div>

      </span>

      <div className="all-set">
        <h1>All Set!</h1>
        <p>Raise funds, engage communities, support projects, and incentivize action.</p>
        {launching ? (
          <div>lanching...</div>
        ) : (
          <PrimaryButton onClick={launchCommons}>
            Launch your Commons
          </PrimaryButton>
        )}
      </div>
    </div>
  )
};

export default Launch;