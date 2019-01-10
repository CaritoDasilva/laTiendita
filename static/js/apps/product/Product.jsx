import React, { Component } from "react";
import { Row, Col, CardPanel, CardTitle, Button } from "react-materialize";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
  }
  addItem(event) {
    this.props.addItem(this.props.item);
  }

  render() {
    const listItem = {
      name: this.props.item.name,
      price: this.props.item.price,
      imageUrl: this.props.item.imageURL
    };

    return (
      <div>
        <Row>
          <Col s={12} m={5}>
            <CardPanel className="teal lighten-4 black-text cardStyle">
              {<CardTitle image={listItem.imageUrl} />}
              <h3>{listItem.name}</h3>
              <h4>${listItem.price}</h4>
              {console.log(this.props.items)}
              <Button waves="light" onClick={this.addItem}>
                Add Cart
              </Button>
            </CardPanel>
          </Col>
        </Row>
      </div>
    );
  }
}
