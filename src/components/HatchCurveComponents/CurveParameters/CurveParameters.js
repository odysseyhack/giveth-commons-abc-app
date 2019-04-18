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

  const calculatePostHatchPrice = () => {
    const k = 4;
    const initialReserve = (initialRaise) * ((100 - fundingPoolPercentage)/100);
    const intitialSupply = initialRaise / initialTokenPrice;

    console.log(intitialSupply, initialReserve, k);
    const invarientCoeff = (intitialSupply ** k) / initialReserve;

    // _R => (k * _R ** ((k - 1) / k)) / V0 ** (1 / k);
    const temp =  Math.floor(((k * initialReserve ** ((k - 1) / k)) / invarientCoeff ** (1 / k)) * 100);
    return temp/100
  }

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
        <span>{Math.floor(fundingPoolPercentage / 100 * initialRaise)} XDAI</span>
        <p>Initial Capital Available</p>
      </div>
      <div className="post-hatch">
        <span className="dai">{calculatePostHatchPrice()} XDAI/Token</span>
        <p>Post Hatch Price</p>
      </div>
      <CurveVisualizer theta={fundingPoolPercentage} initialRaise={initialRaise} startPrice={initialTokenPrice} />
    </div>
  </div>
};

CurveParameters.propTypes = {
  onNextPhase: PropTypes.func.isRequired
}

export default CurveParameters;