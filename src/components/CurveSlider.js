/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// Stateless UI Component
const CurveSlider = ({value, setValue, labelName}) => {
  return(
    <div className="commons slider-container">
      <label>{labelName}</label>
      <h2>{value}</h2>
      <Slider sliderStyle="slider" value={value} onChange={(newValue) => setValue(newValue)}/>
    </div>
  )
};

CurveSlider.propTypes = {
  value: PropTypes.number.isRequired,
  labelName: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};

export default CurveSlider;