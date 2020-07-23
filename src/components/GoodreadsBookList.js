import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import GoodreadsBook from "./GoodreadsBook";

class GoodreadsBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookListElements:
        props.bookListElements === undefined ? [] : props.bookListElements,
    };
  }

  componentDidMount() {
    this.parseReviews();
  }

  parseReviews() {
    if (!this.props.xml) return;
    const parser = new DOMParser();
    const response = parser.parseFromString(this.props.xml, "application/xml");

    const parseError = response.getElementsByTagName("parsererror");
    if (parseError.length) {
      this.setState({
        error: "There was an error fetching results.",
      });
      return;
    }

    const list = this.getReviewsFromXmlResponse(
      response.getElementsByTagName("review")
    );
    this.setState({ bookListElements: list });
  }

  getReviewsFromXmlResponse(allReviews) {
    const list = [];

    for (let eachReview of allReviews) {
      const id = eachReview.getElementsByTagName("id")[0].innerHTML;
      const imageURL = eachReview.getElementsByTagName("image_url")[0]
        .innerHTML;
      const title = eachReview.getElementsByTagName("title")[0].innerHTML;
      const link = eachReview.getElementsByTagName("link")[0].innerHTML;

      const reviewItem = (
        <GoodreadsBook
          key={id}
          id={id}
          image={imageURL}
          title={title}
          link={link}
        />
      );
      list[`review${id}`] = reviewItem;
    }
    return list;
  }
  render() {
    return (
      <Container>
        <Row>
          {Object.keys(this.state.bookListElements).map(
            (key) => this.state.bookListElements[key]
          )}
        </Row>
      </Container>
    );
  }
}

export default GoodreadsBookList;
