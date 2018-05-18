import React, { Component } from "react";
import { formatPrice } from "../helpers";

class EditFishForm extends Component {
  handleChange = event => {
    // Update fish
    // 1. Take copy of current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    // 2.
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    const { name, price, desc, image, status } = this.props.fish;

    return (
      <div className="fish-edit">
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleChange}
          value={name}
        />
        <input
          name="price"
          type="text"
          placeholder="Price"
          onChange={this.handleChange}
          value={formatPrice(price)}
        />
        <select name="status" type="text" placeholder="Status">
          <option onChange={this.handleChange} value="available">
            Fresh!
          </option>
          <option onChange={this.handleChange} value="unavailable">
            Sold out!
          </option>
        </select>
        <textarea
          name="description"
          type="text"
          placeholder="Description"
          onChange={this.handleChange}
          value={desc}
        />
        <input name="image" type="text" placeholder="Image" />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish from Inventory
        </button>
      </div>
    );
  }
}

export default EditFishForm;
