import React from "react";
export default class SemHookStateEffect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `Você clicou ${this.state.count} vezes!`;
  }
  componentDidUpdate() {
    document.title = `Você clicou ${this.state.count} vezes!`;
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
