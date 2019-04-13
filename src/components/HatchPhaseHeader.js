/**
 * Created by will on 12/04/19.
 */
import React from 'react'
import PropTypes from 'prop-types';

const HatchPhaseHeader = ({title, subtitle, hatchPhase}) => {
  return (
    <div className="header hatch">
      <div className={"hatch-progress " + hatchPhase}/>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  )
};

HatchPhaseHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}


export default HatchPhaseHeader;
