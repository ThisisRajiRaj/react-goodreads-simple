import React, { act } from "react";
import { createRoot } from "react-dom/client";
import GoodreadsBookList from "./GoodreadsBookList";

describe("GoodreadsBookList", () => {
  it("renders with empty XML without crashing", () => {
    const div = document.createElement("div");
    const xml = "<GoodreadsResponse></GoodreadsResponse>";

    act(() => {
      const root = createRoot(div);
      root.render(<GoodreadsBookList xml={xml} />);
      root.unmount();
    });
  });
});
