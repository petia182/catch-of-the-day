import React from 'react';

class Order extends React.Component {
  render() {
    return (
      <div className="order-wrap">
        <h3>Your Order</h3>
        <ul>
          <li>{this.props.displayOrder}</li>
        </ul>
      </div>
    )
  };
}

export default Order;
