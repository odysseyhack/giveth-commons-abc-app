import React from 'react';
import {PrimaryButton} from '@giveth/commons-components';


const UnfundedMilestoneButtons = ({milestone}) => {

  // Removed  && this.state.display === ''
  return (
    <div>
      {!milestone.isFunded() && (
        <div className="milestone-header-buttons">
          <PrimaryButton
            onClick={() => milestone.doDonate10()}
          >{"Donate 10 " + milestone.state.amountSymbol}
          </PrimaryButton>
          {milestone.state.momentumAllocated === 0 && (
            <PrimaryButton
              onClick={() => milestone.doBond()}
            >Nominate for commons funding</PrimaryButton>
          )}
          {milestone.state.momentumAllocated > 0 && milestone.state.momentumAvailable > 0 && (
            <PrimaryButton
              onClick={() => milestone.doBond()}
            >{"Flex " + milestone.state.momentumSymbol}</PrimaryButton>
          )}
          {milestone.state.momentumAllocated > 0 && milestone.state.momentumAvailable <= 0 && (
            <PrimaryButton
              classNames="disabled"
            >{"Flex " + milestone.state.momentumSymbol}</PrimaryButton>
          )}
          of {milestone.state.momentumAvailable} {milestone.state.momentumSymbol} available
        </div>
      )}
    </div>
  )
};

export default UnfundedMilestoneButtons;
