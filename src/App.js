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
        <p> {this.props.name} - {this.props.price} </p>
        <button onClick={this.buy}> Buy </button>
        <h3> Qty: {this.state.qty} items(s)</h3>
        <hr/>
      </div>
    );
  }
}


class Total extends Component {
  render(){
    return(
      <div>
        <h3> Total Cash: </h3>
      </div>
    )
  }
}

class ProductList extends Component {
  render(){
    return(
      <div>
          <Product name="Andriod" price="121"/>
          <Product name="Apple" price="123"/>
          <Product name="nokia" price="59"/>
          <Total/>
      </div>
    )
  }
}




export default ProductList;
