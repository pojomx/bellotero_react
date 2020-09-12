import './Slider.css';
import React from 'react';

export default class Slider extends React.Component {
  state = {
    value: 10
  }

  handleOnChange = (e) => this.setState({ value: e.target.value })

  render() {
    return (
    <div className="slider">
        <input type="range" min={this.props.min} max={this.props.max} value={this.state.value} className="slider" onChange={this.handleOnChange} />
        <div className="value">{this.state.value}</div>
    </div>
    )
  }
}