/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import PropTypes from 'prop-types';
import HatchPhaseHeader from '../HatchPhaseHeader'
import CurveParametersForm from './CurveParametersForm';
import CurveVisualisation from '../../CurveVisualisation';

const CurveParameters = ({onNextPhase}) => {

  return <div className="curve-hatch-phase">
    <HatchPhaseHeader title="Set your curve parameters" subtitle="Set your curve parameters for your ‘hatch sale’.
How much funding do you want to raise?"/>
    <CurveParametersForm onSubmit={(parameters) => onNextPhase(parameters)}/>
    <div className="hatch-curve-vis">
      <div className="initial-capital">
        <span>775 DAI</span>
        <p>Initial Capital Available</p>
      </div>
      <div className="post-hatch">
        <span className="dai">100 DAI</span>
        <p>Post Hatch Price</p>
      </div>
      <CurveVisualisation/>
    </div>
  </div>
};

CurveParameters.propTypes = {
  onNextPhase: PropTypes.func.isRequired
}

export default CurveParameters;