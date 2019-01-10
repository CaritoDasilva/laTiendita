import React, { Component } from "react";
import ShowProducts from "./showProducts/ShowProducts";
import CartProducts from "./cartProducts/CartProducts";

export default class IndexApp extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [], cart: [] };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentWillMount() {
    fetch("items")
      .then(response => {
        return response.json();
      })
      .then(catalog => {
        this.setState({ items: catalog.catalog });
      });
  }

  addItem(item) {
    if (this.state) {
      this.setState({ cart: this.state.cart.concat([item]) });
      var array = [...this.state.items]; // make a separate copy of the array
      var index = array.indexOf(item);
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ items: array });
      }
      console.log(this.state);
    }
  }

  removeItem(item) {
    if (this.state) {
      this.setState({ items: this.state.items.concat([item]) });
      var array = [...this.state.cart]; // make a separate copy of the array
      var index = array.indexOf(item);
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ cart: array });
      }
      console.log(this.state);
    }
  }
  render() {
    return (
      <div>
        <CartProducts
          items={this.state.items}
          cart={this.state.cart}
          removeItem={this.removeItem}
        />
        <ShowProducts items={this.state.items} addItem={this.addItem} />
      </div>
    );
  }
}
