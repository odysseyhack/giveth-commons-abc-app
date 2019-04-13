/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import {PrimaryButton, FormField} from '@giveth/commons-components';

const CampaignParametersForm = ({submitCampaignParameters}) => {

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (<form className="campaign-form">
    <FormField setValue={setName} value={name} labelText="What is the name of your organisation?"/>
    <FormField setValue={setDescription} value={description} labelText="Describe Campaign"/>

    <PrimaryButton onClick={() => submitCampaignParameters(name, description)}>
      Next Phase
    </PrimaryButton>
  </form>)
}

export default CampaignParametersForm;