/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import PropTypes from 'prop-types';
import HatchPhaseHeader from './HatchPage/HatchPhaseHeader';
import {PrimaryButton, FormField} from '@giveth/commons-components';

const CommunityParameters = ({onLaunchCommons}) => {

  const [minimumContribution, setMinimumContribution] = React.useState(20);
  const [time, setTime] = React.useState(2);
  const [convictionTime, setConvictionTime] = React.useState(10);
  const [exitFee, setExitFee] = React.useState(1);

  return <div className="community-parameter-phase">
    <HatchPhaseHeader title="Hatch Curve" subtitle="Set up curve"/>
    <form >
      <div className="form-fields">
        <FormField labelText="What is the minimum contribution a Hatcher can make?" value={minimumContribution} setValue={setMinimumContribution}/>
        <FormField labelText="How Long?" value={time} setValue={setTime}/>
        <FormField labelText="Conviction time?" value={convictionTime} setValue={setConvictionTime}/>



        <div className="radio-field">
          <label>What is your exit fee?</label>
          <div className="radio">
            <label>
              <input type="radio" value="option1" checked={exitFee === 1} onClick={(e) => {setExitFee(1)}}/>
              Low
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option2" checked={exitFee === 2} onClick={(e) => {setExitFee(2)}}/>
              Medium
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option3" checked={exitFee === 3} onClick={(e) => {setExitFee(3)}}/>
              High
            </label>
          </div>

        </div>
      </div>

      <div className="space-holder"/>

      <PrimaryButton onClick={() => onLaunchCommons({minimumContribution, time, convictionTime})}>
        Launch your Commons
      </PrimaryButton>

    </form>


  </div>
};

CommunityParameters.propTypes = {
  onLaunchCommons: PropTypes.func.isRequired
};

export default CommunityParameters;