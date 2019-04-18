import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const MilestoneInfo = ({milestone}) => {
  
  return (
    <div className="milestone-info">
      <div className="column">
        <h2>Description & Updates</h2>
        <div>
          <h3>Creator</h3>
          <div className="user-container">
            <div className="pic"></div>
            <div>Anonymous user</div>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis lorem sapien, at rutrum orci viverra non. Donec vitae odio suscipit, suscipit eros at, auctor justo. Sed sit amet magna non elit hendrerit pharetra. Nullam imperdiet ultrices hendrerit. Nullam tempor, est sed rhoncus feugiat, augue lacus sodales tortor, suscipit
          </div>
        </div>
        <div>
          <h3>Milestone proposed</h3>
          <div>20 days ago</div>
        </div>
        <div>
          <h3>Milestone nomination initiated</h3>
          <div>10 min ago</div>
        </div>
        <div>
          <h3>Milestone nomination success</h3>
          <div>Waiting...</div>
        </div>
      </div>

      <div className="column column-right">
        <h2>Details</h2>
        <div>
          <h3>Reviewer</h3>
          <div className="user-container">
            <div className="pic"></div>
            <div>Griff Green</div>
          </div>
          <div className="little-info">
            Person reviewing the actual completion of the Milestone
          </div>
        </div>
        <div>
          <h3>Fund Requested</h3>
          <div>{milestone.state.amountRequested} {milestone.state.amountSymbol}</div>
          <div className="little-info">
            The maximum amount of DAI that can be donated to this Milestone. Based on the requested amount in fiat.
          </div>
        </div>
        <div>
          <h3>Progress</h3>
          <div>
            Donated {' '}
            {milestone.state.amountDonated} {milestone.state.amountSymbol} / {' '}
            {milestone.state.amountRequested} {milestone.state.amountSymbol}
          </div>
          <Slider value={milestone.state.amountDonated} max={milestone.state.amountRequested}/>
          <div>
            Pledged {' '}
            {milestone.getAmountPledged()} {milestone.state.amountSymbol} / {' '}
            {milestone.state.amountRequested} {milestone.state.amountSymbol} via {milestone.state.momentumSymbol}
          </div>
          <Range value={[-milestone.getAmountPledged(), 0]} min={-milestone.state.amountRequested} max="0"/>
        </div>
        <div>
          <h3>Date of milestone</h3>
          <div>
            16th March 2019
          </div>
          <div className="little-info">
            This date defines DAI-fiat converstoin rate
          </div>
        </div>
      </div>
    </div>
  )
}

export default MilestoneInfo