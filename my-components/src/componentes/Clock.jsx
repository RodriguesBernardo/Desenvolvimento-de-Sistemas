import React from "react";
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <h1>Olá Mundo!</h1>
        <h2>A hora agora é {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
