import React from 'react';
import UnitsDropdown from '../UnitsDropdown';
import PropTypes from 'prop-types';


const CurrencyInput = ({classNames, imageUrl, currency, label, value, setValue}) => {
  return (
    <div className={classNames ? "currency-input " + classNames : "currency-input"}>
      <div className="input-field">
        <label>{label}</label>

        <input value={value} onChange={(e) => setValue(e.target.value)}/>
      </div>

      <UnitsDropdown iconUrl={imageUrl} currency={currency}/>
    </div>
  )
};

CurrencyInput.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  currency: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired
};

export default CurrencyInput;