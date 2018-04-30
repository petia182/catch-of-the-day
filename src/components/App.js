import React from "react";
import Header from "./Header";
import Order from "./Order";
import sampleFishes from "../sample-fishes.js";
import Inventory from "./Inventory";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    // 1. Ceate a copy of the fishes object
    const fishes = { ...this.state.fishes };
    // 2. Add the fish into fishes
    fishes[`fish${Date.now()}`] = fish;
    // 3. Update state
    this.setState({
      fishes: fishes
    });
  };

  loadSamplaFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  addToOrder = fishKey => {
    const order = { ...this.state.order };

    order[fishKey] = order[fishKey] + 1 || 1;

    this.setState({
      order
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                fishKey={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          addToOrder={this.addToOrder}
          fishes={this.state.fishes}
          order={this.state.order}
        />
        <Inventory
          addFish={this.addFish}
          loadSamplaFishes={this.loadSamplaFishes}
        />
      </div>
    );
  }
}

export default App;
