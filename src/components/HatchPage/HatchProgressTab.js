/**
 * Created by will on 13/04/19.
 */
import React from 'react';

const HatchProgressTab = ({phaseNumber, phaseName}) => {
  return (<div className="progress-step">
    <div className="phase-number">{phaseNumber}</div>
    <p>{phaseName}</p>
  </div>)
}

export default HatchProgressTab;