/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import {PrimaryButton, FormField} from '@giveth/commons-components';

const CampaignParametersForm = ({submitCampaignParameters}) => {

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (<form className="campaign-form">
    <FormField fieldStyle="launch-field" setValue={setName} value={name} labelText="What is the name of your organisation?"/>
    <FormField fieldStyle="launch-field" setValue={setDescription} value={description} labelText="Describe your community, organisation or commons"/>
    <div className="space-holder"/>
    <PrimaryButton onClick={() => submitCampaignParameters(name, description)}>
      Continue
    </PrimaryButton>
  </form>)
}

export default CampaignParametersForm;