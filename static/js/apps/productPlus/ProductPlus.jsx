import React, { Component } from "react";
import { Row, Col, CardPanel, CardTitle, Button } from "react-materialize";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }
  removeItem(event) {
    this.props.removeItem(this.props.item);
  }
  render() {
    const listCart = {
      name: this.props.item.name,
      price: this.props.item.price,
      imageUrl: this.props.item.imageURL
    };
    return (
      <div>
        <Row>
          <Col s={12} m={5}>
            <CardPanel className="teal lighten-4 black-text cardStyle">
              {<CardTitle image={listCart.imageUrl} />}
              <h3>{listCart.name}</h3>
              <h4>${listCart.price}</h4>
              {console.log(listCart.name)}
              <Button waves="light" onClick={this.removeItem}>
                Remove
              </Button>
            </CardPanel>
          </Col>
        </Row>
      </div>
    );
  }
}
