/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import {PrimaryButton, FormField} from '@giveth/commons-components';
import { CommonsTokenContext } from "../../../context/CommonsToken";
import { commonsTokenActions } from "../../../state/commonsToken";

const CampaignParametersForm = ({submitCampaignParameters}) => {

  const { state, dispatch } = React.useContext(CommonsTokenContext);

  return (<form className="campaign-form">
    <FormField
      placeholder="Organisation name"
      fieldStyle="launch-field"
      setValue={(name) => dispatch({ type: commonsTokenActions.setName, name })}
      value={state.name}
      labelText="What is the name of your organisation?"
    />
    <FormField
      placeholder="Description..."
      fieldStyle="launch-field"
      setValue={(description) => dispatch({ type: commonsTokenActions.setDescription, description })}
      value={state.description}
      labelText="Describe your community, organisation or commons"
    />
    <div className="space-holder"/>
    <PrimaryButton onClick={() => submitCampaignParameters(state.name, state.description)}>
      Continue
    </PrimaryButton>
  </form>)
}

export default CampaignParametersForm;
