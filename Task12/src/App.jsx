import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: "",
      randomNumber: Math.floor(Math.random() * 10) + 1,
      result: "",
    };
  }

  checkGuess = () => {
    const userNumber = Number(this.state.guess);

    if (!this.state.guess) {
      this.setState({ result: "Please enter a number" });
      return;
    }

    if (userNumber === this.state.randomNumber) {
      this.setState({ result: "Success Value: Correct guess" });
    } else {
      this.setState({ result: "Failure Value: Wrong guess" });
    }
  };

  newGame = () => {
    this.setState({
      guess: "",
      randomNumber: Math.floor(Math.random() * 10) + 1,
      result: "",
    });
  };

  render() {
    return (
      <div>
        <h2>Guess the Number</h2>
        <p>Enter a number from 1 to 10</p>

        <input
          type="number"
          value={this.state.guess}
          onChange={(e) => this.setState({ guess: e.target.value })}
        />

        <button onClick={this.checkGuess}>Check</button>
        <button onClick={this.newGame}>New Number</button>

        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default App;
