import React, { act } from "react";
import { createRoot } from "react-dom/client";
import GoodreadsWrapper from "./GoodreadsWrapper";

describe("GoodreadsWrapper", () => {
  it("renders without crashing", async () => {
    const div = document.createElement("div");
    const originalFetch = global.fetch;

    global.fetch = jest.fn(() =>
      Promise.resolve({
        text: () => Promise.resolve("<GoodreadsResponse></GoodreadsResponse>"),
      })
    );

    await act(async () => {
      const root = createRoot(div);
      root.render(<GoodreadsWrapper userid="1" apikey="key" />);
      root.unmount();
    });
    global.fetch = originalFetch;
  });
});
