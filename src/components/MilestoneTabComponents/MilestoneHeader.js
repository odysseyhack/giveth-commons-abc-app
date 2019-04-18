import React from 'react';
import MilestoneActionButtons from './MilestoneActionButtons';

const MilestoneHeader = ({milestone}) => {

  return (
    <div>
      <div className="milestone-header">
        <div>
          <div>
            Campaign: {milestone.state.campaignName}
          </div>
          <h1>{milestone.state.name}</h1>
          <p>{milestone.state.description}</p>
          <MilestoneActionButtons milestone={milestone}/>
        </div>
      </div>
    </div>
  )
};

export default MilestoneHeader;