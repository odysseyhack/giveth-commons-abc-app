/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import UnitsDropdown from './UnitsDropdown';
import 'rc-slider/assets/index.css';

const daiIconUrl = process.env.PUBLIC_URL + "/images/dai.png";


// Stateless UI Component
const CurveSlider = ({value, setValueFromSlider, setValueFromInputField, labelName, calculatePercentage, isXDAI}) => {
  return(
    <div className="commons slider-container curve-slider launch-field">
      <div>
        <div className="label-row"><label>{labelName}</label><span>?</span>
        </div>
        <div className="value-row">
          <input value={isXDAI ? value : value + '%'} onChange={(e) => setValueFromInputField(e.target.value)} />
          {isXDAI ? <UnitsDropdown iconUrl={daiIconUrl} currency="xDAI"/> : null}
        </div>
      </div>
      <Slider sliderStyle="slider" value={calculatePercentage(value)} onChange={(newValue) => {setValueFromSlider(newValue)}}/>
    </div>
  )
};

CurveSlider.propTypes = {
  labelName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  setValueFromInputField: PropTypes.func.isRequired,
  setValueFromSlider: PropTypes.func.isRequired,
  isXDAI: PropTypes.bool.isRequired,
  calculatePercentage: PropTypes.func.isRequired
};

export default CurveSlider;