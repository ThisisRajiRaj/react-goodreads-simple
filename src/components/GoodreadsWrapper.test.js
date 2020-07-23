import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GoodreadsWrapper from "./GoodreadsWrapper";

Enzyme.configure({ adapter: new Adapter() });

test("no api key", async () => {
  const unit = shallow(<GoodreadsWrapper userid="abc" />);
  expect(unit.text()).toMatch(/No apikey or userid configured/);
});

test("no userid", async () => {
  const unit = shallow(<GoodreadsWrapper apikey="abc" />);
  expect(unit.text()).toMatch(/No apikey or userid configured/);
});

test("no userid and userid", async () => {
  const unit = shallow(<GoodreadsWrapper />);
  expect(unit.text()).toMatch(/No apikey or userid configured/);
});

test("bad apikey", (done) => {
  function afterFetch(comp) {
    try {
      expect(comp.state.shelfContent).toMatch(/Invalid API key/);
      done();
    } catch (error) {
      done(error);
    }
  }

  const comp = (
    <GoodreadsWrapper
      apikey="xxx"
      userid={process.env.REACT_APP_GOODREADS_USER_ID}
      afterFetch={afterFetch}
    />
  );
  const unit = shallow(comp);
  unit.instance().forceUpdate();
  unit.update();
});

test("bad user", (done) => {
  function afterFetch(comp) {
    try {
      expect(comp.state.shelfContent).toMatch(/Page not found/);
      done();
    } catch (error) {
      done(error);
    }
  }

  const comp = (
    <GoodreadsWrapper
      apikey={process.env.REACT_APP_GOODREADS_API_KEY}
      userid="sd"
      afterFetch={afterFetch}
    />
  );
  const unit = shallow(comp);
  unit.instance().forceUpdate();
  unit.update();
});

test("valid data", (done) => {
  function afterFetch(comp) {
    try {
      expect(comp.state.shelfContent).toMatch(/<reviews /);
      done();
    } catch (error) {
      done(error);
    }
  }

  const comp = (
    <GoodreadsWrapper
      apikey={process.env.REACT_APP_GOODREADS_API_KEY}
      userid={process.env.REACT_APP_GOODREADS_USER_ID}
      afterFetch={afterFetch}
    />
  );
  const unit = shallow(comp);
  unit.instance().forceUpdate();
  unit.update();
});
