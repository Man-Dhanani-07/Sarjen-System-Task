import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      sum: "",
    };
  }

  calculateSum() {
    const result = (parseInt(this.state.num1) || 0) + (parseInt(this.state.num2) || 0);
    this.setState({ sum: result });
  }

  render() {
    return (
      <div>
        <h1>Sum of Two Numbers</h1>
        <input
          type="number" value={this.state.num1}
          onChange={(e) => this.setState({ num1: e.target.value })}
        />
        <input
          type="number" value={this.state.num2}
          onChange={(e) => this.setState({ num2: e.target.value })}
        />
        <button onClick={this.calculateSum.bind(this)}>Calculate</button>
        <h2>Sum: {this.state.sum}</h2>
      </div>
    );
  }
}
export default App;