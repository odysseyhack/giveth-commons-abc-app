import React from "react";

import { PrimaryButton, ViewContext, viewActions, views } from "@giveth/commons-components";
import ConvictionVoting from "./ConvictionVoting";
import DaiProgressBar from './DaiProgressBar';
// import { maxHeaderSize } from "http";

const daiUrl = process.env.PUBLIC_URL + '/images/dai.png';

const globalparams = {
  alpha: 90,
  totaltime: 100
};

let d = 65;

const around = (offset, range) => {
  d += 7;
  return offset + ((d * 47) & (range || 60));
};

const milestones = [
  {
    title: "Milestone: Protect Water Resource from pollution",
    subtext: "Commons: Philadelphia area",
    longtext:
      "Aqua array detects increasing concentration of unwanted substance 09A. Bad actor is autofactory 01a. Proposal is shutdown, further investigation, maintenance and resolution of error.",
    currentValue: 2000,
    maxValue: 5000,
    treshold: 150000
  },
  {
    title: "Milestone: Rainwater Collectors for Namibia",
    subtext: "Commons: Liquid Africa",
    longtext:
      "Support 15 rural commonities in establishing sustainable water sources by installing rainwater collectors.",
    currentValue: 15000,
    maxValue: 15000,
    treshold: 100000
  }
].map((milestone, i) => {
  return {
    ...milestone,
    convictions: [
      {
        name: "Philadelphia DAO",
        stakes: [
          { time: around(0), tokensstaked: around(2000, 300) },
          { time: around(50), tokensstaked: around(0, 300) }
        ]
      },
      {
        name: "Aqua Array",
        stakes: [
          { time: around(20), tokensstaked: around(333, 300) },
          { time: around(65), tokensstaked: around(6000, 5000) }
        ]
      },
      {
        name: "Global Water Commons",
        stakes: [
          { time: around(30), tokensstaked: around(1000, 500) },
          { time: around(80), tokensstaked: around(7000, 4500) }
        ]
      },
      {
        name: "Autofactory Factory",
        stakes: [
          { time: around(0), tokensstaked: 1100 },
          { time: around(30), tokensstaked: 7000 }
        ]
      }
    ]
  };
});

const Milestones = () => {
  const {state, dispatch} = React.useContext(ViewContext);


  return (
    <div className="eco-milestones">
      <div className="navbar-wrapper">
        <ul className="navbar">
          <li className="selected">Active</li>
          <li>Paid</li>
          <li>Canceled</li>
          <li>Rejected</li>
        </ul>
        <PrimaryButton >
          Propose a Milestone </PrimaryButton>
      </div>

      <table>
        <tr>
          <td className="milestone-title">Name</td>
          <td>Funding Progress</td>
          <td>Actions</td>
        </tr>
        {milestones.map(
          ({
             title,
             subtext,
             longtext,
             currentValue,
             maxValue,
             convictions,
             treshold
           }) => (
            <>
            <tr onClick={() => dispatch({type: viewActions.changeView, view: views.selectedMilestone})}>
              <td>
                <p className="title">{title}</p>
                <p className="subtext">{subtext}</p>
                <p className="longtext">{longtext}</p>
                {/* <PrimaryButton name="Voting weight 25000" /> */}
              </td>
              <td>
                <DaiProgressBar currentValue={currentValue} maxValue={maxValue} />
                <ConvictionVoting
                  globalparams={globalparams}
                  convictions={convictions}
                  treshold={treshold}
                />
              </td>
              <td>
                {currentValue < maxValue && (
                  <>
                  <PrimaryButton >Add 2300 conviction</PrimaryButton>
                  <p className="subtext">to pass the proposal in 12h</p>
                  <PrimaryButton showDai >Donate 3000 xDai</PrimaryButton>
                  <p className="subtext">to pass the proposal right now</p>
                  </>
                )}
                {currentValue >= maxValue && (
                  <PrimaryButton >Request Payout</PrimaryButton>
                )}
              </td>
            </tr>
            </>
          )
        )}
      </table>
    </div>
  );
}

export default Milestones;
