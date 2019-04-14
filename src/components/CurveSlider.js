/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// Stateless UI Component
const CurveSlider = ({value, setValue, labelName, calculatePercentage}) => {
  return(
    <div className="commons slider-container launch-field">
      <label>{labelName}</label>
      <h2>{value}</h2>
      <Slider sliderStyle="slider" value={calculatePercentage(value)} onChange={(newValue) => { console.log(newValue); setValue(newValue)}}/>
    </div>
  )
};

CurveSlider.propTypes = {
  labelName: PropTypes.string.isRequired,
};

export default CurveSlider;