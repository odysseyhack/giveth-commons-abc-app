import React, { useState } from "react";
import "./CurveVisualiser.scss";

import Chart from "./Chart";
import Input from "./Input";

import { Line } from "react-chartjs-2";

function CurveVisualiser() {
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
  const dSAvg = parseInt(dR / pAvg);

  const initData = [
    ["Initial reserve (xDAI)", R0],
    ["Initial Supply (tokens)", S0],
    ["Invariant coef", V0]
  ];

  const priceData = [
    ["p1", p1],
    ["p(R_start)", pStart],
    ["p(R_start + dR)", pdR]
  ];

  const buyData = [
    ["Dropping (Mil xDAI)", dR * 1e-6],
    ["Average Price (xDAI / token)", pAvg],
    ["Getting (Mil tokens)", dSAvg * 1e-6]
  ];

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
  let plotSupply = {
    labels: labelsSupply,
    datasets: [
      { label: "price", borderColor: "rgba(75,12,12,1)", data: datasetSupply }
    ]
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Token Bonding curve App</h1>
          <div className="row m">
            {[
              <Input name="k" handler={[k, setK]} />,
              <Input name="theta (%)" handler={[theta, setTheta]} />,
              <Input name="d0 (xDAI)" handler={[d0, setD0]} />,
              <Input name="p0 (xDAI)" handler={[p0, setP0]} />
            ].map((inpt, i) => (
              <div key={i} className="col top-input">
                {inpt}
              </div>
            ))}
          </div>

          <div className="row m">
            <div className="col">
              <h6>Initial data</h6>
              <div className="data-grid">
                {initData.map(([a, b]) => (
                  <>
                    <span key={a + 1}>{a}</span>
                    <span key={a + 2}>{b.toFixed(3)}</span>
                  </>
                ))}
              </div>
            </div>
            <div className="col">
              <h6>Price data</h6>
              <div className="data-grid">
                {priceData.map(([a, b]) => (
                  <>
                    <span key={a + 1}>{a}</span>
                    <span key={a + 2}>{b.toFixed(3)}</span>
                  </>
                ))}
              </div>
            </div>
            <div className="col">
              <h6>Buy data</h6>
              <div className="data-grid">
                {buyData.map(([a, b]) => (
                  <>
                    <span key={a + 1}>{a}</span>
                    <span key={a + 2}>{b.toFixed(3)}</span>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="row m">
            <div className="col">
              <div className="alert alert-secondary" role="alert">
                Play around with the values below to simulate a buy
              </div>
            </div>
          </div>

          <div className="row m">
            {[
              <Input name="Plot reserve times" handler={[timesR, setTimesR]} />,
              <Input
                name="R start (as % of R0)"
                handler={[RStartPercent, setRStartPercent]}
              />,
              <Input
                name="delta R (as % of R0)"
                handler={[dRPercent, setDRPercent]}
              />
            ].map((inpt, i) => (
              <div key={i} className="col top-input big">
                {inpt}
              </div>
            ))}
          </div>

          <div className="row m">
            <div className="col c">
              <Line data={plot} />
              
              <Chart
                {...{
                  label: "Reserve (R) [Mil xDAI]",
                  from: 0,
                  to: timesR * R0,
                  steps: 20,
                  f: priceFofR,
                  refs: [
                    { y: p0, label: "p0" },
                    { y: p1, label: "p1" },
                    { y: pStart, label: "pStart" },
                    { y: pdR, label: "pdR" }
                  ]
                }}
              />
            </div>
            <div className="col c">
              <Line data={plotSupply} />
              <Chart
                {...{
                  label: "Supply (R) [Mil Tokens]",
                  from: 0,
                  to: timesR ** (1 / k) * S0,
                  steps: 20,
                  f: priceFofS,
                  refs: [
                    { y: p0, label: "p0" },
                    { y: p1, label: "p1" },
                    { y: pStart, label: "pStart" },
                    { y: pdR, label: "pdR" }
                  ]
                }}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default CurveVisualiser;
