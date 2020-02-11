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
    this.props.handleTotal(this.props.price)
  }

  show = () => {
    this.props.handleShow(this.props.name) 
  }

  render() {
    return (
      <div>
        <p> {this.props.name} - ${this.props.price}  </p>
        <button onClick={this.buy}> Buy </button>
        <button onClick={this.show}> Show </button>
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
        <h3> Total Cash: ${this.props.total} </h3>
      </div>
    )
  }
}






class ProductList extends Component {

    state = {
      total: 0
    }
  

  calculateTotal = (price) => {
    this.setState({total: this.state.total + price}) 
  }

    showProduct = (name) => {
      alert(`You selected ${name}`)
    }

  render(){
    return(
      <div>
          <Product name="Andriod" price={121} handleShow={this.showProduct} handleTotal={this.calculateTotal}/>
          <Product name="Apple" price={123} handleShow={this.showProduct} handleTotal={this.calculateTotal}/>
          <Product name="nokia" price={59} handleShow={this.showProduct} handleTotal={this.calculateTotal}/>
          <Total total={this.state.total}/>
      </div>
    )
  }
}


export default ProductList;
