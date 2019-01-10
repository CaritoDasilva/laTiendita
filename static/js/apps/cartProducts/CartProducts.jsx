import React, { Component } from "react";
import ProductPlus from "../productPlus/ProductPlus";

export default class CartProducts extends Component {
  render() {
    return (
      <div className="cartProductsContent">
        {console.log(this.props.addItem)}
        {this.props.cart.map((element, index) => (
          <ProductPlus
            index={index}
            item={element}
            removeItem={this.props.removeItem}
          />
        ))}
      </div>
    );
  }
}
