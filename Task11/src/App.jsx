import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      rate: "",
      gst: 0,
      total: 0,
    };
  }

  handleCalculate = () => {
    const amountValue = Number(this.state.amount);
    const rateValue = Number(this.state.rate);

    if (!amountValue || amountValue < 0) {
      this.setState({ gst: 0, total: 0 });
      return;
    }

    const gstValue = (amountValue * rateValue) / 100;
    const totalValue = amountValue + gstValue;

    this.setState({
      gst: gstValue,
      total: totalValue,
    });
  };

  render() {
    return (
      <div>
        <h1>GST Calculator</h1>

        <p>
          Enter Amount (in INR):
          <input
            type="number"
            value={this.state.amount}
            onChange={(e) => this.setState({ amount: e.target.value })}
          />
        </p>

        <p>
          Select GST Rate:
          <select
            value={this.state.rate}
            onChange={(e) => this.setState({ rate: e.target.value })}
          >
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18">18%</option>
            <option value="28">28%</option>
          </select>
        </p>

        <button onClick={this.handleCalculate}>Calculate GST</button>

        <p>Amount: Rs {Number(this.state.amount || 0)}</p>
        <p>
          GST ({this.state.rate}%): Rs {this.state.gst}
        </p>
        <p>Total: Rs {this.state.total}</p>
      </div>
    );
  }
}

export default App;
