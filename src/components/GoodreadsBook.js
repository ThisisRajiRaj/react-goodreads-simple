import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

class GoodreadsBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      image: props.image,
      link: props.link,
    };
  }

  render() {
    if (!this.state.title) {
      return (<React.Fragment></React.Fragment>);
    }
    return (
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id={`tooltip${this.state.id}`}>
            <strong> {this.state.title}</strong>
          </Tooltip>
        }
      >
        <Card
          className="mb-3 mr-1 ml-1"
          bg="dark"
          text="white"
          style={{ width: "8em" }}
        >
          <a href={this.state.link}>
            <Card.Img src={this.state.image} alt={this.state.title} />
          </a>
        </Card>
      </OverlayTrigger>
    );
  }
}

export default GoodreadsBook;
