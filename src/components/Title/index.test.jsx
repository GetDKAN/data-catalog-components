import React from "react";
import { shallow } from "enzyme";
import Title from "./index";

describe("<Title />", () => {
  it("renders as default h1 with text", () => {
    const wrapper = shallow(<Title title="My Title" />);
    expect(wrapper.html()).toBe("<h1>My Title</h1>");
  });

  it("renders as h5 with text", () => {
    const wrapper = shallow(<Title headerLevel="h5" title="My Title" />);
    expect(wrapper.html()).toBe("<h5>My Title</h5>");
  });
});
