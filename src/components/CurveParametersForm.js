/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {PrimaryButton} from '@giveth/commons-components';
import CurveSlider from './CurveSlider';


const CurveParametersForm = ({onSubmit}) => {

  const [initialRaise, setInitialRaise] = React.useState(50) ;
  const [fundingPoolPercentage, setFundingPoolPercentage] = React.useState(50) ;
  const [initialTokenPrice, setInitialTokenPrice] = React.useState(50) ;

  return <form className="curve-parameter-form">
    <CurveSlider labelName="Initial Raise" value={initialRaise} setValue={setInitialRaise}/>
    <CurveSlider labelName="Funding Pool Percentage" value={fundingPoolPercentage} setValue={setFundingPoolPercentage}/>
    <CurveSlider labelName="Initial Token Price" value={initialTokenPrice} setValue={setInitialTokenPrice}/>
    <div className="space-holder"/>
    <PrimaryButton onClick={() => onSubmit({initialRaise, fundingPoolPercentage, initialTokenPrice})}>
      Continue
    </PrimaryButton>
  </form>
};

CurveParametersForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default CurveParametersForm;