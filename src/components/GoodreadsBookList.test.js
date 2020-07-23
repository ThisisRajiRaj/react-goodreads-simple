import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GoodreadsBookList from "./GoodreadsBookList";

Enzyme.configure({ adapter: new Adapter() });

test("empty list", () => {
  var list = shallow(<GoodreadsBookList bookListElements={[]} />);
  expect(list.text().length).toBe(0);
});

test("single item", () => {
  var list = shallow(<GoodreadsBookList bookListElements={["abc"]} />);
  expect(list.text()).toBe("abc");
});

test("multiple items", () => {
  var list = shallow(<GoodreadsBookList bookListElements={["abc", "def"]} />);
  expect(list.text()).toBe("abcdef");
});
