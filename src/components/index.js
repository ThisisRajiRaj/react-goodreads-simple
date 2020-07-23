import React from "react";
import { Container } from "react-bootstrap";
import GoodreadsWrapper from "./GoodreadsWrapper";

function BookShelf(props) {
  const myshelf_url =
    "https://www.goodreads.com/review/list/" +
    process.env.REACT_APP_GOODREADS_USER_ID;
  return (
    <React.Fragment>
      <Container>
        <h6 className="pb-3">
          Go to my <a href={myshelf_url}>GoodReads.com bookshelf</a> for more.
        </h6>
        <GoodreadsWrapper
          apikey={props.apikey}
          userid={props.userid}
          page={props.page}
          per_page={props.per_page}
          shelf={props.shelf}
          sort={props.sort}
        />
      </Container>
    </React.Fragment>
  );
}

export default BookShelf;
