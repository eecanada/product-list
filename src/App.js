import React, { Component } from "react";
import "./App.css";

class Product extends Component {
  state = {
    qty: 0
  };

  buy = () => {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.handleTotal(this.props.price);
  };

  show = () => {
    this.props.handleShow(this.props.name);
  };

  render() {
    return (
      <div>
        <p>
          {this.props.name} - ${this.props.price}
        </p>
        <button onClick={this.buy}> Buy </button>
        <button onClick={this.show}> Show </button>
        <h3> Qty: {this.state.qty} items(s)</h3>
        <hr />
      </div>
    );
  }
}

class Total extends Component {
  render() {
    return (
      <div>
        <h3> Total Cash: ${this.props.total} </h3>
      </div>
    );
  }
}

class ProductForm extends Component {
  submit = e => {
    e.preventDefault();
     
    const product = {
      name: this.refs.name.value,
      price: parseInt(this.refs.price.value)
    }
    this.props.handleCreate(product)
    this.refs.name.value = "";
    this.refs.price.price = '';
  };

  render() {
    return (
      <form onSubmit={this.submit} >
        <input type="text" placeholder="product name" ref="name" />
        <input type="text" placeholder="product price" ref="price" />
        <br />
        <br />
        <button> Create Product </button>
        <hr />
      </form>
    );
  }
}

class ProductList extends Component {
  state = {
    total: 0,
    productList: [
      { name: "Andriod", price: 121 },
      { name: "Apple", price: 123 },
      { name: "Nokia", price: 59 }
    ]
  };


  createProduct = (product) => {
    this.setState({
      productList: this.state.productList.concat(product)
    })
  }

  calculateTotal = price => {
    this.setState({ total: this.state.total + price })
  };

  showProduct = name => {
    alert(`You selected ${name}`);
  };

  render() {
    const products = this.state.productList.map(product => {
      return (
        <Product
          name={product.name}
          price={product.price}
          handleShow={this.showProduct}
          handleTotal={this.calculateTotal}
        />
      );
    });
    return (
      <div>
        <ProductForm handleCreate={this.createProduct} />
        {products}
        <Total total={this.state.total} />
      </div>
    );
  }
}

export default ProductList;
