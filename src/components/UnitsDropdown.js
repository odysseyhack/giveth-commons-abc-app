/**
 * Created by will on 16/04/19.
 */
import React from 'react';


const UnitsDropdown = ({iconUrl, currency}) => {
  return (
    <div className="units-dropdown">
      <img src={iconUrl} />
      <b>{currency}</b>
    </div>
  )
};

export default UnitsDropdown;