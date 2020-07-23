import React, { Component } from "react";
import GoodreadsBookList from "./GoodreadsBookList";

class GoodreadsWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelfContent: "There is nothing to display yet...",
      error: undefined,
      afterFetch: props.afterFetch,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true, error: undefined });
    this.getShelfContent();
  }

  getShelfContent() {
    this.fetchXmlResponse(this.props)
      .then((r) => {
        this.setState({ shelfContent: r, isLoading: false });
        if (this.state.afterFetch) {
          this.state.afterFetch(this);
        }
      })
      .catch((error) => {
        this.setState({
          shelfContent: "ERROR " + error.toString(),
          isLoading: false,
        });
        if (this.state.afterFetch) {
          this.state.afterFetch(this);
        }
      });
  }

  fetchXmlResponse(props) {
    if (!props.userid || !props.apikey) {
      this.setState({
        shelfContent: "No apikey or userid configured",
        isLoading: false,
        error: "No apikey or userid configured.",
      });
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    myHeaders.append("X-Requested-With", "XMLHttpRequest");

    var raw = {
      id: props.userid,
      shelf: props.shelf ?? "read",
      key: props.apikey,
      per_page: props.per_page ?? 10,
      page: props.page ?? 1,
      sort: props.sort ?? "date_read",
      v: "2",
    };
    var queryString = Object.keys(raw)
      .map((key) => key + "=" + raw[key])
      .join("&");

    const url =
      "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list?" +
      queryString;

    return fetch(url, { headers: myHeaders })
      .then((response) => response.text())
      .then((data) => data)
      .catch((error) => error);
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading data from Goodreads shelf...</p>;
    }
    if (this.state.error) return <p>{this.state.error}</p>;
    return (
      <>
        <GoodreadsBookList xml={this.state.shelfContent}></GoodreadsBookList>
      </>
    );
  }
}

export default GoodreadsWrapper;
