/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import PropTypes from 'prop-types';
import HatchPhaseHeader from './HatchPage/HatchPhaseHeader'
import CampaignParametersForm from './CampaignParametersForm';

const CampaignParameters = ({onNextPage}) => {
  return <div>
    <HatchPhaseHeader title="Launch your Commons" subtitle="Raise funds, engage communities, support projects, and incentivize action."/>
    <CampaignParametersForm submitCampaignParameters={(name, description) => onNextPage({name, description})}/>

  </div>
}

CampaignParameters.propTypes = {
  onNextPage: PropTypes.func.isRequired,

}

export default CampaignParameters;