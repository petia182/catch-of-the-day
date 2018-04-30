import React from 'react';

class AddFishForm extends React.Component {

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descriptionRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    event.preventDefault();

    const fish = {
      name: this.nameRef.value.value,
      price: this.priceRef.value.value,
      status: this.statusRef.value.value,
      description:  this.descriptionRef.value.value,
      image: this.imageRef.value.value,
    }

    this.props.addFish(fish);
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
        <select name="status"ref={this.statusRef} type="text" placeholder="Status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea name="description"ref={this.descriptionRef} type="text" placeholder="Description"></textarea>
        <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
        <button type="submit">+ Add Fish</button>
      </form>
    )
  };
}

export default AddFishForm;
