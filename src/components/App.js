import React from 'react';
import Header from './Header';
import Order from './Order';
import sampleFishes from '../sample-fishes.js'
import Inventory from './Inventory';
import Fish from './Fish';

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
     // 1. Ceate a copy of the fishes object
     const fishes = {...this.state.fishes};
     // 2. Add the fish into fishes
     fishes[`fish${Date.now()}`] = fish
     // 3. Update state
     this.setState({
       fishes: fishes
     })
  };

  loadSamplaFishes = () => {

    this.setState({
      fishes: sampleFishes
    })

  };

  addToOrder = (fishKey) => {

    const order = {...this.state.order};

    order[fishKey] === 1 ? order[fishKey] = order[fishKey] + 1 : order[fishKey] = 1

    this.setState({
      order
    })
  };

  displayOrder = (fishKey) => {

    const fish = this.state.order[fishKey];

    return fish;

    // const fish = {
    //   name: this.state.order.fishKey.name,
    //   price: this.state.order.fishKey.price
    // }
    //
    // console.log(fish);
    // return fish;
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
          displayOrder={this.state.order.fish1} />
        <Inventory addFish={this.addFish} loadSamplaFishes={this.loadSamplaFishes}/>
      </div>
    )
  };
}

export default App;
