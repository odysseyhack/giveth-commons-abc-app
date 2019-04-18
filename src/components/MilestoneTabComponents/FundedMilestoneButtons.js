import React from 'react';
import {PrimaryButton} from '@giveth/commons-components';


const FundedMilestoneButtons = ({milestone}) => {
  return (
    <div className="milestone-header-buttons">
      {!milestone.state.isDone && (
        <PrimaryButton
          onClick={() => milestone.setState({ isDone: true })}>Mark complete
        </PrimaryButton>
      )}
      {milestone.state.isDone && !milestone.state.isValidated && (
        <PrimaryButton
          onClick={() => milestone.setState({ isValidated: true })}>
          Validate
        </PrimaryButton>
      )}
      {milestone.state.isDone && milestone.state.isValidated && (
        <PrimaryButton
          onClick={() => alert("This would open the UI to collect donations and token.")}>Redeem</PrimaryButton>
      )}
    </div>
  )
};

export default FundedMilestoneButtons;
