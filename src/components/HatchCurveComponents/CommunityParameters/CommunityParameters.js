/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import PropTypes from 'prop-types';
import HatchPhaseHeader from '../HatchPhaseHeader';
import CommunityParametersForm from './CommunityParametersForm';
import CommonsOverview from '../CommonsOverview';

const CommunityParameters = ({onNextPhase, campaignParameters, curveParameters}) => {




  return <div className="community-parameter-phase">
    <HatchPhaseHeader title="Define community guidelines" subtitle="Define your governance principles and parameters. How do you want to engage your community?"/>
    <CommunityParametersForm onNextPhase={onNextPhase}/>

    <CommonsOverview name={campaignParameters.name} description={campaignParameters.description}/>


  </div>
};

CommunityParameters.propTypes = {
  onLaunchCommons: PropTypes.func.isRequired
};

export default CommunityParameters;