import React, { Component } from "react";
import "./App.css";

class Product extends Component {
  state = {
      qty: 0
    }
  
  buy = () => {
    this.setState({
      qty : this.state.qty + 1
    });
  }

  render() {
    return (
      <div>
        <p>Android - $199 </p>
        <button onClick={this.buy}> Buy </button>
        <h3> Qty: {this.state.qty} items(s)</h3>
      </div>
    );
  }
}

export default Product;
