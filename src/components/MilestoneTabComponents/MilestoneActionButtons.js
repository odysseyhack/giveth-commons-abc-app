import React from 'react';

import FundedMilestoneButtons from './FundedMilestoneButtons';
import UnfundedMilestoneButtons from './UnfundedMilestoneButtons';


const MilestoneActionButtons = ({milestone}) => {

  return milestone.isFunded()? <FundedMilestoneButtons milestone={milestone}/> : <UnfundedMilestoneButtons milestone={milestone}/>

};

export default MilestoneActionButtons;


