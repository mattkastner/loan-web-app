import React, { Component } from "react";
import Slider, { SliderTooltip } from "rc-slider";
import { connect } from "react-redux";

import "rc-slider/assets/index.css";

const { Handle } = Slider;

class CalcSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.startValue,
      firstTimeChecker: true,
    };
  }
  onSliderChange = (value) => {
    this.setState({
      value,
    });
    // if (this.props.type === "decimal") {
    console.log(
      "Checking",
      +this.state.value / 100 <= 0.05,
      +this.state.value / 100
    );
    if (this.props.type === "downPayment" && this.state.value / 100 < 0.02) {
      this.props.sliderUpdate(0);
    } else if (this.props.type === "insterestRate" && this.state.value / 100 < 1.3) {
      this.props.sliderUpdate(0);

    } else if (this.props.type === "taxes" && this.state.value / 100 < .03) {
      this.props.sliderUpdate(0);

    } 
    else {
      this.props.sliderUpdate(this.state.value / 100);
    }
    // } else {
    //   this.props.sliderUpdate(this.state.value);
    // }
  };

  componentDidMount() {
    let sliderTip = document.querySelectorAll(".rc-slider-tooltip-inner");
    sliderTip.forEach((element) => {
      element.style.background = "white";
      element.style.color = "rgb(98,121,255,0.77)";
      element.style.fontWeight = "900";
      element.style.fontSize = "12px";
      element.style.paddingLeft = "10px";
      element.style.paddingRight = "10px";
      element.style.wordBreak = "break-all";
    });

    // if (!sliderTip[0]?.hasChildNodes()) {
    //   let innerDiv = document.createElement('div');
    //   innerDiv.textContent = '$60,000';
    //   sliderTip[0]?.appendChild(innerDiv);
    // }
    this.setState({ firstTimeChecker: false, value: this.props.startValue });
  }
  handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    let overlay = this.props.percentage ? value / 100 : value;
    overlay += " %";

    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={overlay}
        visible={
          this.state.firstTimeChecker ? this.state.firstTimeChecker : dragging
        }
        placement="right"
        tipProps={{ overlayClassName: "slider-style" }}
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

  render() {
    return (
      <div style={{ marginTop: 10, marginBottom: 10, width: "100%" }}>
        <Slider
          min={this.props.min}
          max={this.props.max}
          value={this.state.value}
          onChange={this.onSliderChange}
          handle={this.handle}
          railStyle={{
            marginTop: "3px",
            background: "white",
            boxShadow: "0px 0px 4px rgba(46, 98, 224, 0.2)",
            height: "8px",
          }}
          handleStyle={{
            height: "24px",
            width: "24px",
            background: "#433EED",
            borderRadius: "50%",
            border: "6px solid white",
            boxShadow: "0px 0px 4px rgba(46, 98, 224, 0.2)",
          }}
          trackStyle={{
            marginTop: "3px",
            height: "8px",
            background: "#433EED",
            borderRadius: "4px",
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default CalcSlider;
