import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {/* {this.props.children} */}
        <AddFishForm addFish={this.props.addFish}></AddFishForm>
        <button onClick={this.props.loadSamplaFishes}>Load Sample Fishes</button>
      </div>
    )
  };
}

export default Inventory;
