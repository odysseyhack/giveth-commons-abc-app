/**
 * Created by will on 13/04/19.
 */
import React from 'react';
import HatchProgressBar from './HatchProgressBar';
import HatchProgressTab from './HatchProgressTab';

const HatchProgressContainer = () => {
  return (
    <div className="progress-bar">
      <HatchProgressBar/>
      <HatchProgressTab phaseNumber={1} phaseName="Basic Information"/>
      <HatchProgressTab phaseNumber={2} phaseName="Token Distribution"/>
      <HatchProgressTab phaseNumber={3} phaseName="Community Parameters"/>
      <HatchProgressTab phaseNumber={4} phaseName="All set!"/>
    </div>
  )
};

export default HatchProgressContainer;