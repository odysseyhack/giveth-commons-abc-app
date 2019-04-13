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
  const [exitFeeType, setExitFeeType] = React.useState(1);

  const getExitFee = () => {
    let exitFee = 0
    if (exitFeeType === 1) {
      exitFee = 2;
    } else if (exitFeeType === 2) {
      exitFee = 4;
    } else {
      exitFee = 6;
    }
    return exitFee;
  }


  return <div className="community-parameter-phase">
    <HatchPhaseHeader title="Define community guidelines" subtitle="Define your governance principles and parameters. How do you want to engage your community?"/>
    <form >
      <div className="form-fields">
        <FormField fieldStyle="launch-field" labelText="What is the minimum contribution a Hatcher can make?" value={minimumContribution} setValue={setMinimumContribution}/>
        <FormField fieldStyle="launch-field"  labelText="How Long?" value={time} setValue={setTime}/>
        <FormField fieldStyle="launch-field"  labelText="Conviction time?" value={convictionTime} setValue={setConvictionTime}/>



        <div className="radio-field">
          <label>What is your exit fee?</label>
          <div className="radio">
            <label>
              <input type="radio" value="option1" checked={exitFeeType === 1} onClick={(e) => {setExitFeeType(1)}}/>
              Low
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option2" checked={exitFeeType === 2} onClick={(e) => {setExitFeeType(2)}}/>
              Medium
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option3" checked={exitFeeType === 3} onClick={(e) => {setExitFeeType(3)}}/>
              High
            </label>
          </div>

        </div>
      </div>

      <div className="space-holder"/>

      <PrimaryButton onClick={() => {
        const exitFee = getExitFee();
        onLaunchCommons({
          minimumContribution, time, convictionTime, exitFee})
      }}>
        Launch your Commons
      </PrimaryButton>

    </form>


  </div>
};

CommunityParameters.propTypes = {
  onLaunchCommons: PropTypes.func.isRequired
};

export default CommunityParameters;