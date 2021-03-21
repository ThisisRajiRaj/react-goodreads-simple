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

    // This is clearly hacky, but goodreads seems to not honor my
    // # of records to return otherwise on mobile. So faking
    // the user-agent to appear like request is coming from a PC.
    myHeaders.append(
      "User-Agent",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
        "AppleWebKit/537.36 (KHTML, like Gecko) " +
        "Chrome/74.0.3729.169 Safari/537.36"
    );

    var raw = {
      id: props.userid,
      shelf: props.shelf === undefined ? "read" : props.shelf,
      key: props.apikey,
      per_page: props.per_page === undefined ? 10 : props.per_page,
      page: props.page === undefined ? 1 : props.page,
      sort: props.sort === undefined ? "date_read" : props.sort,
      v: "2",
    };
    var queryString = Object.keys(raw)
      .map((key) => key + "=" + raw[key])
      .join("&");

    const url =
      "https://www.goodreads.com/review/list?" +
      queryString;

    return fetch(url, { mode:'no-cors', headers: myHeaders })
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
      <React.Fragment>
        <GoodreadsBookList xml={this.state.shelfContent}></GoodreadsBookList>
      </React.Fragment>
    );
  }
}

export default GoodreadsWrapper;
