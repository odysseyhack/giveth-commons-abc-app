/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import PropTypes from 'prop-types';
import HatchPhaseHeader from './HatchPage/HatchPhaseHeader'
import CurveParametersForm from './CurveParametersForm';

const CurveParameters = ({onNextPhase}) => {

  return <div className="curve-hatch-phase">
    <HatchPhaseHeader title="Hatch Curve" subtitle="Set up curve"/>
    <CurveParametersForm onSubmit={(parameters) => onNextPhase(parameters)}/>
  </div>
};

CurveParameters.propTypes = {
  onNextPhase: PropTypes.func.isRequired
}

export default CurveParameters;