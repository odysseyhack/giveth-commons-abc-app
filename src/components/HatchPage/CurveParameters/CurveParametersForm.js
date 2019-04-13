/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {PrimaryButton} from '@giveth/commons-components';
import CurveSlider from '../../CurveSlider';


const CurveParametersForm = ({onSubmit}) => {

  const [initialRaise, setInitialRaise] = React.useState(4000000) ;
  const [fundingPoolPercentage, setFundingPoolPercentage] = React.useState(20) ;
  const [initialTokenPrice, setInitialTokenPrice] = React.useState(0.5) ;

  // 1 mil to 7.5mil
  const calculateInitialRaisePercentage = () => {
    const min = 1000000;
    console.log("raise", initialRaise)
    // ((input - min) * 100) / (max - min)
    const temp = ((initialRaise - min)* 100) / 6500000;
    console.log(temp)
    return Math.floor(temp)
  };

  const calculateFundingPoolPercentage = () => {
    const min = 10;
    return (fundingPoolPercentage - min) * 100 /40
  };

  const calculateInitialTokenPricePercentage = () => {
    const min = 0.1;
    // console.log(initialTokenPrice);
    console.log((initialTokenPrice - min) * 100 / 0.9);

    return ((initialTokenPrice - min) * 100 / 0.9)
  }

  return <form className="curve-parameter-form">
    <CurveSlider labelName="How much money are you raising?" calculatePercentage={calculateInitialRaisePercentage} value={initialRaise} setValue={(value) => {setInitialRaise(Math.floor((value * 6500000/100) + 1000000))}}/>
    <CurveSlider labelName="How much should be put into the  funding pool?" calculatePercentage={calculateFundingPoolPercentage} value={fundingPoolPercentage} setValue={(value) => {setFundingPoolPercentage((value * 40 / 100) + 10)}}/>
    <CurveSlider labelName="What is the starting price per token?" calculatePercentage={calculateInitialTokenPricePercentage} value={initialTokenPrice} setValue={(value) => {setInitialTokenPrice(((value * 0.9 / 100) + 0.1))}}/>
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