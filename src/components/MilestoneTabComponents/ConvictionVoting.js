import React, { Component } from "react";
import { defaults, Line } from "react-chartjs-2";
import convictionlib from "../../math/convictionlib.js";
// import "./sim.css";

class Me extends Component {
  constructor(props) {
    super();

    this.state = {
      globalparams: props.globalparams,
      convictions: props.convictions,
      treshold: props.threshold
    };
  }

  componentWillMount() {
    this.recalc();
  }

  componentWillReceiveProps(newProps) {
    //   debugger;
    this.setState({ globalparams: newProps.globalparams });
    this.recalc();
  }

  makecolor(i) {
    const r = (i * 139) % 255;
    const g = (i * 251) % 255;
    const b = (i * 43) % 255;
    return `rgba(${r},${g},${b},0.3)`;
  }

  recalc() {
    let labels = [];
    for (let t = 0; t < this.state.globalparams.totaltime; t++) {
      labels.push(t);
    }

    let stakeHistory = [];

    let datasets = this.state.convictions.map((user, userindex) => {
      const a = this.state.globalparams.alpha / 100;
      const D = 10;
      let y0 = 0;
      let y1 = y0;
      let x = 0;
      let labels = [];
      let data = [];

      let localt = 0; // local time ( = age of current conviction amount - reset every time conviction stake is changed.)
      let stakeIndex = 0;
     

      for (let t = 0; t < this.state.globalparams.totaltime; t++) {
        // get timeline events for this CV

        y1 = convictionlib.getConviction(a, D, y0, x, localt);

        data.push(y1);

        // check if user changed his conviction
        if (
          user.stakes &&
          user.stakes.length > stakeIndex &&
          user.stakes[stakeIndex].time <= t
        ) {
          let action = user.stakes[stakeIndex];
          stakeIndex++;
          x = action.tokensstaked;
          localt = 0;
          y0 = y1;

          // descriptive history
          stakeHistory.push({
            t: t,
            desc: `${user.name} changes stake to ${action.tokensstaked}`
          });
        }
       
        localt++;
      }

      return {
        label: user.name,
        fill: false,
        // backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: this.makecolor(userindex),
        data: data
      };
    });

    // add a dataset with the total conviction
    let totalconvictiondata = [];
    let triggervals = [];
    let passed = false;
    for (let t = 0; t < this.state.globalparams.totaltime; t++) {
      let total = datasets.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.data[t];
      }, 0);
      totalconvictiondata.push(total);
      triggervals.push(this.props.treshold);

      if (total > this.state.treshold && !passed){
        passed=true;
        stakeHistory.push({
          t: t,
          desc: `Proposal approved!`
        });
      }
     
    }
    datasets.push({
      label: "trigger value",
      borderColor: "rgba(75,255,75,1)",
      data: triggervals
    });
    datasets.push({
      label: "total",
      borderColor: "rgba(75,192,192,1)",
      data: totalconvictiondata
    });

    stakeHistory.sort((a, b) => {
      return a.t - b.t;
    });

    this.setState({
      plot: {
        labels: labels,
        datasets: datasets
      },
      timeline: stakeHistory
    });
  }

  render() {
    const timeline = this.state.timeline.map((item, i) => {
      return (
        <div key={i}>
          {item.t}h : {item.desc}
        </div>
      );
    });

    return (
      <div className="container">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Conviction chart</p>
          </header>
          <div className="card-content">
            <div className="content">
              {this.state.plot && <Line data={this.state.plot} />}
              <p className="card-header-title">Timeline detail</p>
              <ol>{timeline}</ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Me;
