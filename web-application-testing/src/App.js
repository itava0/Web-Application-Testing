import React, { Component } from "react";
import DashBoard from "./Components/Dashboard";

class App extends Component {
  state = {
    strikes: 0,
    balls: 0
  };

  handleStrikes = () => {
    const value = this.state.strikes;
    if (value === 3) {
      this.setState({ balls: 0, strikes: 0 });
    } else {
      this.setState({ strikes: value + 1 });
    }
  };

  handleBalls = () => {
    const value = this.state.balls;
    if (value === 4) {
      this.setState({ balls: 0, strikes: 0 });
    } else {
      this.setState({ balls: value + 1 });
    }
  };

  handleFoul = () => {
    const value = this.state.strikes;
    if (value >= 2) {
      return value;
    } else {
      this.setState({ strikes: value + 1 });
    }
  };

  handleHit = () => {
    this.setState({ balls: 0, strikes: 0 });
  };

  render() {
    return (
      <div>
        <header>
          <h1>Score Board Display</h1>
          <DashBoard
            strikes={this.state.strikes}
            balls={this.state.balls}
            handleStrikes={this.handleStrikes}
            handleBalls={this.handleBalls}
            handleFoul={this.handleFoul}
            handleHit={this.handleHit}
          />
        </header>
      </div>
    );
  }
}

export default App;
