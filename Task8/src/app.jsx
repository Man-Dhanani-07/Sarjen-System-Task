import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: parseInt(localStorage.getItem("count")) || 0,
    };
  }

  componentDidMount() {
    localStorage.setItem("count", this.state.count);
  }

  componentDidUpdate() {
    localStorage.setItem("count", this.state.count);
  }

  incrementData() {
    if (this.state.count >= 10) {
      alert("Counter cannot be greater than 10");
      this.setState({ count: 0 });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  }

  decrementData() {
    if (this.state.count <= 0) {
      alert("Counter cannot be less than 0");
      this.setState({ count: 0 });
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.incrementData.bind(this)}>+</button>
        <button onClick={this.decrementData.bind(this)}>-</button>
      </div>
    );
  }
}
export default App;