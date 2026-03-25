import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  addValue = (text) => {
    this.setState({ value: this.state.value + text });
  };

  clearValue = () => {
    this.setState({ value: "" });
  };

  calculate = () => {
    try {
      const answer = eval(this.state.value);
      this.setState({ value: String(answer) });
    } catch {
      this.setState({ value: "Error" });
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px", color: "black" }}>
        <h1>Simple Calculator</h1>

        <input
          type="text"
          value={this.state.value}
          readOnly
          style={{ width: "170px", height: "24px", marginBottom: "10px" }}
        />

        <table style={{ margin: "0 auto" }}>
          <tbody>
            <tr>
              <td><button style={{ width: "28px", height: "24px" }} onClick={() => this.addValue("1")}>1</button></td>
              <td><button style={{ width: "28px", height: "24px" }} onClick={() => this.addValue("2")}>2</button></td>
              <td><button style={{ width: "28px", height: "24px" }} onClick={() => this.addValue("3")}>3</button></td>
              <td><button style={{ width: "28px", height: "24px" }} onClick={() => this.addValue("+")}>+</button></td>
            </tr>
            <tr>
              <td><button style={{ width: "28px", height: "24px" }} onClick={() => this.addValue("4")}>4</button></td>
              <td><button style={{ width: "28px", height: "24px" }} onClick={() => this.addValue("5")}>5</button></td>
              <td><button style={{ width: "28px", height: "24px" }} onClick={() => this.addValue("6")}>6</button></td>
              <td><button style={{ width: "28px", height: "24px" }} onClick={() => this.addValue("-")}>-</button></td>
            </tr>
            <tr>
              <td><button style={{ width: "28px", height: "24px" }} onClick={() => this.addValue("7")}>7</button></td>
              <td><button style={{ width: "28px", height: "24px" }} onClick={() => this.addValue("8")}>8</button></td>
              <td><button style={{ width: "28px", height: "24px" }} onClick={() => this.addValue("9")}>9</button></td>
              <td><button style={{ width: "28px", height: "24px" }} onClick={() => this.addValue("*")}>*</button></td>
            </tr>
            <tr>
              <td><button style={{ width: "28px", height: "24px" }} onClick={() => this.addValue("0")}>0</button></td>
              <td><button style={{ width: "28px", height: "24px" }} onClick={this.calculate}>=</button></td>
              <td><button style={{ width: "28px", height: "24px" }} onClick={() => this.addValue(".")}>.</button></td>
              <td><button style={{ width: "28px", height: "24px" }} onClick={() => this.addValue("/")}>/</button></td>
            </tr>
          </tbody>
        </table>

        <button
          onClick={this.clearValue}
          style={{ width: "28px", height: "24px", marginTop: "6px" }}
        >
          C
        </button>
      </div>
    );
  }
}

export default App;
