import React from 'react'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import {PrimaryButton} from '@giveth/commons-components'
import './Milestone.scss'

export class Milestone extends React.Component {
  state = {
    name: 'Plant 100 trees',
    description: 'There\'s a patch of sparse forest near my village and I plan to organize a neighbour initiative to plant 100 trees over one weekend.',
    campaignName: 'Planting seeds in South Indonesia Forests',
    amountRequested: '1500',
    amountSymbol: 'xDAI',
    amountDonated: 0,
    momentumAvailable: 7,
    momentumAllocated: 0,
    momentumSymbol: '💪',
    isDone: false,
    isValidated: false
  }

  isFunded () {
    return (this.state.amountDonated + this.getAmountPledged()) >= this.state.amountRequested
  }

  getAmountPledged () {
    return this.momentumToAmount(this.state.momentumAllocated);
  }

  getMomentumRequired () {
    return this.getTotalMomentumRequired() - (this.state.amountDonated * 10);
  }

  getTotalMomentumRequired () {
    return (this.state.amountRequested * 10);
  }

  momentumToAmount (momentum) {
    return momentum * 177
  }

  doBond () {
    this.setState({momentumAllocated: this.state.momentumAllocated + 1})
    this.setState({momentumAvailable: this.state.momentumAvailable - 1})
  }

  doDonate10 () {
    this.setState({amountDonated: this.state.amountDonated + 10})
  }

  render() {
    return (
      <div className="milestone">
        <MilestoneHeader milestone={this} />
        <div className="milestone-body">
          <MilestoneInfo milestone={this} />
        </div>
      </div>
    )
  }
}

export class MilestoneHeader extends React.Component {
  constructor (props) {
    super(props)
    this.milestone = props.milestone
    this.state = {
      display: ''
    }
  }

  render() {
    const { state } = this.state
    return (
      <div>
        <div className="milestone-header">
          <div>
            <div>
              Campaign: {this.milestone.state.campaignName}
            </div>
            <h1>{this.milestone.state.name}</h1>
            <p>{this.milestone.state.description}</p>
            <MilestoneActionButtons milestone={this.milestone}/>
          </div>
        </div>
      </div>
    )
  }
}

class MilestoneActionButtons extends React.Component {
  constructor (props) {
    super(props)
    this.milestone = props.milestone
    this.state = {
      display: ''
    }
  }

  renderNonFunded () {
    return (
      <div>
        {!this.milestone.isFunded() && this.state.display === '' && (
          <div class="milestone-header-buttons">
            <PrimaryButton
              onClick={() => this.milestone.doDonate10()}
            >{"Donate 10 " + this.milestone.state.amountSymbol}
            </PrimaryButton>
            {this.milestone.state.momentumAllocated === 0 && (
              <PrimaryButton
                onClick={() => this.milestone.doBond()}
              >Nominate for commons funding</PrimaryButton>
            )}
            {this.milestone.state.momentumAllocated > 0 && this.milestone.state.momentumAvailable > 0 && (
              <PrimaryButton
                onClick={() => this.milestone.doBond()}
              >{"Flex " + this.milestone.state.momentumSymbol}</PrimaryButton>
            )}
            {this.milestone.state.momentumAllocated > 0 && this.milestone.state.momentumAvailable <= 0 && (
              <PrimaryButton
                classNames="disabled"
              >{"Flex " + this.milestone.state.momentumSymbol}</PrimaryButton>
            )}
            of {this.milestone.state.momentumAvailable} {this.milestone.state.momentumSymbol} available
          </div>
        )}
      </div>
    )
  }

  renderFunded () {
    return (
      <div className="milestone-header-buttons">
        {!this.milestone.state.isDone && (
          <PrimaryButton
            onClick={() => this.milestone.setState({ isDone: true })}>Mark complete
          </PrimaryButton>
        )}
        {this.milestone.state.isDone && !this.milestone.state.isValidated && (
          <PrimaryButton
            onClick={() => this.milestone.setState({ isValidated: true })}>
            Validate
          </PrimaryButton>
        )}
        {this.milestone.state.isDone && this.milestone.state.isValidated && (
          <PrimaryButton
            onClick={() => alert("This would open the UI to collect donations and token.")}>Redeem</PrimaryButton>
        )}
      </div>
    )
  }

  render () {
    return this.milestone.isFunded()? this.renderFunded() : this.renderNonFunded()
  }
}

export class MilestoneInfo extends React.Component {
  constructor (props) {
    super(props)
    this.milestone = props.milestone
  }

  render() {
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
            <div>{this.milestone.state.amountRequested} {this.milestone.state.amountSymbol}</div>
            <div className="little-info">
              The maximum amount of DAI that can be donated to this Milestone. Based on the requested amount in fiat.
            </div>
          </div>
          <div>
            <h3>Progress</h3>
            <div>
              Donated {' '}
              {this.milestone.state.amountDonated} {this.milestone.state.amountSymbol} / {' '}
              {this.milestone.state.amountRequested} {this.milestone.state.amountSymbol}
            </div>
            <Slider value={this.milestone.state.amountDonated} max={this.milestone.state.amountRequested}/>
            <div>
              Pledged {' '}
              {this.milestone.getAmountPledged()} {this.milestone.state.amountSymbol} / {' '}
              {this.milestone.state.amountRequested} {this.milestone.state.amountSymbol} via {this.milestone.state.momentumSymbol}
            </div>
            <Range value={[-this.milestone.getAmountPledged(), 0]} min={-this.milestone.state.amountRequested} max="0"/>
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
}
