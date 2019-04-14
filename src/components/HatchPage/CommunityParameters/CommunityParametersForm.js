/**
 * Created by will on 13/04/19.
 */
import React from 'react';
import {PrimaryButton, FormField} from '@giveth/commons-components';

const CommunityParametersForm = ({onNextPhase}) => {
  const [minimumContribution, setMinimumContribution] = React.useState(20);
  const [hatchSalePeriod, setHatchSalePeriod] = React.useState(20);
  const [proposalDuration, setProposalDuration] = React.useState(3);
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

  return (
    <form >
      <div className="form-fields">
        <FormField fieldStyle="launch-field" labelText="What is the minimum contribution a Hatcher can make?" value={minimumContribution} setValue={setMinimumContribution}/>
        <FormField fieldStyle="launch-field"  labelText="How long will your hatch sale be?" value={hatchSalePeriod} setValue={setHatchSalePeriod}/>
        <FormField fieldStyle="launch-field"  labelText="How long will proposals last?" value={proposalDuration} setValue={setProposalDuration}/>



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
        onNextPhase({
          minimumContribution, hatchSalePeriod, proposalDuration, exitFee})
      }}>
        Continue
      </PrimaryButton>

    </form>
  )
};

export default CommunityParametersForm;