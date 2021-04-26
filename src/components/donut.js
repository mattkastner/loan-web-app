import React, { Component } from "react";

import { connect } from "react-redux";

class CircularProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Size of the enclosing square
    const sqSize = this.props.sqSize;
    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent

    const dashOffsetCircle2 = 375 - (360 * this.props.circle2) / 100;
    const dashOffsetCircle1 = 375 - (360 * this.props.circle1) / 100;

    return (
      <svg
        width={this.props.sqSize}
        height={this.props.sqSize}
        viewBox={viewBox}
      >
        <circle
          className="circle-background"
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`}
        />
        <circle
          className="circle-progress2"
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(${270 - dashOffsetCircle1} ${
            this.props.sqSize / 2
          } ${this.props.sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffsetCircle2,
          }}
        />
        <circle
          className="circle-progress"
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(270 ${this.props.sqSize / 2} ${
            this.props.sqSize / 2
          })`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffsetCircle1,
          }}
        />

        <text
          className="circle-text"
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
        >
          {`$${Math.trunc(this.props.total)}`}
        </text>
        <text
          className="circle-heading"
          x="50%"
          y="33%"
          color="#b7b7b7"
          style={{ fill: "#b7b7b7", stroke: "#b7b7b7", strokeWidth: "0.1px" }}
          dy=".3em"
          textAnchor="middle"
        >
          {`Your Payment`}
        </text>
        <text
          className="circle-heading"
          x="50%"
          y="69%"
          color="#b7b7b7"
          style={{
            fill: "rgb(230,71,50,0.4)",
            stroke: "rgb(230,71,50,0.4)",
            strokeWidth: "1px",
          }}
          dy=".3em"
          textAnchor="middle"
        >
          {`@${this.props.interest}%`}
        </text>
      </svg>
    );
  }
}

CircularProgressBar.defaultProps = {
  sqSize: 200,
  strokeWidth: 10,
};

class Donut extends Component {
  constructor() {
    super();

  }

  render() {
    let {
      monthlyPayment,
      homePrice,
      downPayment,
      taxes,
      interestRate,
    } = this.props;
    let principle = monthlyPayment;
    let pmi = ((homePrice - downPayment) * 0.01) / 12;
    let monthlyTaxes = (homePrice * (taxes / 100)) / 12;

    let total = principle + pmi + monthlyTaxes;

    return (
      <div style={{ marginTop: "1%" }}>
        <CircularProgressBar
          strokeWidth="16"
          sqSize="140"
          circle1={(principle / total) * 100}
          circle2={(pmi / total) * 100}
          interest={interestRate}
          total={total}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

//we are curring the Auth component
export default connect(mapStateToProps, {})(Donut);
