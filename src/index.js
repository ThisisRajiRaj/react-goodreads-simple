import BookShelf from "./components/index";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.Fragment>
    <BookShelf
      apikey={process.env.REACT_APP_GOODREADS_API_KEY}
      userid={process.env.REACT_APP_GOODREADS_USER_ID}
      page="1"
      per_page="20"
      sort="date_read"
    />
  </React.Fragment>,
  document.getElementById("root")
);

export { BookShelf };
