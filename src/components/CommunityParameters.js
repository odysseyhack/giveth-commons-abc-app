/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import PropTypes from 'prop-types';
import HatchPhaseHeader from './HatchPhaseHeader';
import {PrimaryButton, FormField} from '@giveth/commons-components';

const CommunityParameters = ({onLaunchCommons}) => {

  const [minimumContribution, setMinimumContribution] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [convictionTime, setConvictionTime] = React.useState(0);

  return <div className="community-parameter-phase">
    <HatchPhaseHeader title="Hatch Curve" subtitle="Set up curve"/>
    <form >
      <div className="form-fields">
        <FormField labelText="What is the minimum contribution a Hatcher can make?" value={minimumContribution} setValue={setMinimumContribution}/>
        <FormField labelText="How Long?" value={time} setValue={setTime}/>
        <FormField labelText="Conviction time?" value={convictionTime} setValue={setConvictionTime}/>

        <div className="field">
          <label>Exit fee</label>
          <input/>
        </div>
      </div>


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