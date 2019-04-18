import React from 'react';
const daiUrl = process.env.PUBLIC_URL + '/images/dai.png';

// TODO MOVE TO COMMON COMPONENTS

const DaiProgressBar = ({currentValue, maxValue}) => {

  return (
    <div className="progress-bar-container">
      <div className="progress-text">
        <img src={daiUrl} />
        <p>{currentValue}</p>
        <p className="grey"> / {maxValue} xDAI</p>
      </div>
      <div className="progress-bar">
        <div>
          <div
            style={{
              transform: `scaleX(${currentValue / maxValue})`
            }}
          />
        </div>
      </div>
    </div>
  )
};

export default DaiProgressBar;