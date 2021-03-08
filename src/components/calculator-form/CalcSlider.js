import React, { Component } from "react";
import ReactDOM from "react-dom";
//import Slider, { Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import Slider, { SliderTooltip } from "rc-slider";

import "rc-slider/assets/index.css";

const { Handle } = Slider;

class CalcSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  onSliderChange = (value) => {
    this.setState(
      {
        value,
      },
      () => {
        console.log(this.state.value);
      }
    );
  };

  handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${this.props.percentage ? value/100 : value} %`}
        visible={true}
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
          min={0}
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

export default CalcSlider;
