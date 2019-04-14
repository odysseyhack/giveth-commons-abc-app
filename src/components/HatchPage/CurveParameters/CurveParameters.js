/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import PropTypes from 'prop-types';
import HatchPhaseHeader from '../HatchPhaseHeader'
import CurveParametersForm from './CurveParametersForm';
import CurveVisualizer from '../../CurveVisualizer/CurveVisualizer';

const CurveParameters = ({onNextPhase}) => {

  const [initialRaise, setInitialRaise] = React.useState(4000000) ;
  const [fundingPoolPercentage, setFundingPoolPercentage] = React.useState(20) ;
  const [initialTokenPrice, setInitialTokenPrice] = React.useState(1) ;

  return <div className="curve-hatch-phase">
    <HatchPhaseHeader title="Set your curve parameters" subtitle="Set your curve parameters for your ‘hatch sale’.
How much funding do you want to raise?"/>
    <CurveParametersForm
      onSubmit={() => onNextPhase({initialRaise, fundingPoolPercentage, initialTokenPrice})}
      initialRaise={initialRaise}
      setInitialRaise={setInitialRaise}
      fundingPoolPercentage={fundingPoolPercentage}
      setFundingPoolPercentage={setFundingPoolPercentage}
      initialTokenPrice={initialTokenPrice}
      setInitialTokenPrice={setInitialTokenPrice}
    />
    <div className="hatch-curve-vis">
      <div className="initial-capital">
        <span>775 DAI</span>
        <p>Initial Capital Available</p>
      </div>
      <div className="post-hatch">
        <span className="dai">100 DAI</span>
        <p>Post Hatch Price</p>
      </div>
      <CurveVisualizer />
    </div>
  </div>
};

CurveParameters.propTypes = {
  onNextPhase: PropTypes.func.isRequired
}

export default CurveParameters;