import React from "react";
export default class SemHookState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <p>Você clicou {this.state.count} vezes!</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clique aqui (sem hook)
        </button>
      </div>
    );
  }
}
