/**
 * Created by will on 13/04/19.
 */
import React from 'react';
import {PrimaryButton} from '@giveth/commons-components';

const Launch = ({name, curveParameters, communityParameters}) => {
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
        <PrimaryButton>Launch your Commons</PrimaryButton>
      </div>
    </div>
  )
};

export default Launch;