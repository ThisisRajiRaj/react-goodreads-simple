import BookShelf from "./components/BookShelf";
import "bootstrap/dist/css/bootstrap.min.css";

/*
// !!! UNCOMMENT TO GET LOCAL APP RENDER !!!
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <>
    <BookShelf
      apikey={process.env.REACT_APP_GOODREADS_API_KEY}
      userid={process.env.REACT_APP_GOODREADS_USER_ID}
      page="1"
      per_page="20"
      sort="date_read"
    />
  </>,
  document.getElementById("root")
); 
*/

export { BookShelf };
