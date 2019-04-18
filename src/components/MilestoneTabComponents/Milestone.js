import React from 'react'

import MilestoneInfo from './MilestoneInfo';
import MilestoneHeader from './MilestoneHeader';

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
