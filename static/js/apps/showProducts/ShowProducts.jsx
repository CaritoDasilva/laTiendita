import React, { Component } from "react";
import Product from "../product/Product";

export default class ShowProducts extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="showProductsContent">
        {console.log(this.props.addItem)}
        {this.props.items.map((product, key) => (
          <Product key={key} item={product} addItem={this.props.addItem} />
        ))}
      </div>
    );
  }
}
