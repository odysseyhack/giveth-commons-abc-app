/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {PrimaryButton} from '@giveth/commons-components';
import CurveSlider from '../../CurveSlider';

const CurveParametersForm = ({
  onSubmit,
  initialRaise,
  setInitialRaise,
  fundingPoolPercentage,
  setFundingPoolPercentage,
  initialTokenPrice,
  setInitialTokenPrice
}) => {

  // 1 mil to 7.5mil
  const calculateInitialRaisePercentage = (value) => {
    const min = 1000000;
    // ((input - min) * 100) / (max - min)
    const temp = ((value - min)* 100) / 6500000;
    return Math.floor(temp)
  };

  const calculateFundingPoolPercentage = (value) => {
    const min = 10;
    return (value - min) * 100 /40
  };

  const calculateInitialTokenPricePercentage = (value) => {
    const min = 0.1;
    return ((value - min) * 100 / 0.9)
  }

  return <form className="curve-parameter-form">
    <CurveSlider
      labelName="How much money are you raising?"
      calculatePercentage={calculateInitialRaisePercentage}
      value={initialRaise}
      setValueFromSlider={(value) => {setInitialRaise(Math.floor((value * 6500000/100) + 1000000))}}
      setValueFromInputField={setInitialRaise}
      isXDAI={true}
    />
    <CurveSlider
      labelName="How much should be put into the  funding pool?"
      value={fundingPoolPercentage}
      calculatePercentage={calculateFundingPoolPercentage}
      setValueFromSlider={(value) => {setFundingPoolPercentage((value * 40 / 100) + 10)}}
      setValueFromInputField={setFundingPoolPercentage}
      isXDAI={false}
    />
    <CurveSlider
      labelName="What is the starting price per token?"
      value={initialTokenPrice}
      calculatePercentage={calculateInitialTokenPricePercentage}
      setValueFromSlider={(value) => {setInitialTokenPrice(((value * 0.9 / 100) + 0.1))}}
      setValueFromInputField={setInitialTokenPrice}
      isXDAI={true}
    />
    <div className="space-holder"/>
    <PrimaryButton onClick={() => onSubmit()}>
      Continue
    </PrimaryButton>
  </form>
};

CurveParametersForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default CurveParametersForm;