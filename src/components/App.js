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
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(params.storeId, JSON.stringify(this.state.order));
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

  updateFish = (key, updatedFish) => {
    // Take a copy of the current state
    const fishes = { ...this.state.fishes };

    // Update fish with the data from updatedFish
    fishes[key] = updatedFish;

    // set new state
    this.setState({ fishes });
  };

  deleteFish = key => {
    // 1. take a copy of state
    const fishes = { ...this.state.fishes };

    // 2. update the state (set the fish that we don't want to null)
    fishes[key] = null;
    // 3. update state
    this.setState({ fishes });
  };

  loadSamplaFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  addToOrder = key => {
    const order = { ...this.state.order };

    order[key] = order[key] + 1 || 1;

    this.setState({
      order
    });
  };

  deleteFromOrder = key => {
    const order = { ...this.state.order };

    delete order[key];

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
          deleteFromOrder={this.deleteFromOrder}
          fishes={this.state.fishes}
          order={this.state.order}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSamplaFishes={this.loadSamplaFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
