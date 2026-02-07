import React, { Component } from "react";
import Card from "react-bootstrap/Card";

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
      <Card
        className="mb-3 mr-1 ml-1"
        bg="dark"
        text="white"
        style={{ width: "8em" }}
        title={this.state.title}
      >
        <a href={this.state.link} title={this.state.title}>
          <Card.Img src={this.state.image} alt={this.state.title} />
        </a>
      </Card>
    );
  }
}

export default GoodreadsBook;
