import React, { useState } from "react";
import "./CurveVisualizer.scss";

import { Line } from "react-chartjs-2";

function CurveVisualizer() {
  // Curve parameters
  const [k, setK] = useState(4);
  const [theta, setTheta] = useState(35); // initial funding pool allocation
  const [d0, setD0] = useState(3e6); // initial raise xDAI
  const [p0, setP0] = useState(0.01); // initial price xDAI
  // Sale parameters
  const R0 = (1 - theta / 100) * d0; // initial Reserve, xDAI
  const S0 = d0 / p0; // initial supply, Tokens
  const V0 = S0 ** k / R0; // invariant coef

  const [timesR, setTimesR] = useState(2);

  const [dRPercent, setDRPercent] = useState(25);

  const priceFofR = _R => (k * _R ** ((k - 1) / k)) / V0 ** (1 / k);
  const priceFofS = _S => (k * _S ** (k - 1)) / V0;

  const [RStartPercent, setRStartPercent] = useState(135); // initial price xDAI

  // Scale
  const dR = (parseInt(R0) * parseFloat(dRPercent)) / 100;
  const RStart = (parseInt(R0) * parseFloat(RStartPercent)) / 100;
  // Compute price
  const p1 = priceFofR(R0);
  const pStart = priceFofR(RStart);
  const pdR = priceFofR(RStart + dR);
  const pAvg = (pStart + pdR) / 2;

  // reserve data
  let dataset = [];
  let labels = [];
  for (let i = 0; i < timesR * R0; i += (timesR * R0) / 20) {
    let dp = priceFofR(i);
    dataset.push(dp);
    labels.push(i);
  }
  let plot = {
    labels: labels,
    datasets: [
      { label: "price", borderColor: "rgba(75,192,192,1)", data: dataset }
    ]
  };

  // make supply data
  let datasetSupply = [];
  let labelsSupply = [];
  for (
    let i = 0;
    i < timesR ** (1 / k) * S0;
    i += (timesR ** (1 / k) * S0) / 20
  ) {
    let p = priceFofS(i);
    datasetSupply.push(p);
    labelsSupply.push(Math.floor(i));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row m">
            <div className="col c">
              <Line data={plot} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default CurveVisualizer;
