import React from "react";
import { shallow } from "enzyme";
import Text from "./index";

describe("<Title />", () => {
  it("renders as plain text", () => {
    const wrapper = shallow(<Text value="<u>My Value</u>" />);
    expect(wrapper.html()).toBe("<u>My Value</u>");
  });

  it("renders as children instead of value", () => {
    const wrapper = shallow(
      <Text value="<u>My Value</u>">
        <p>My Children</p>
      </Text>
    );
    expect(wrapper.html()).toBe("<u>My Value</u>");
  });

  it("renders as children instead of value", () => {
    const wrapper = shallow(
      <Text>
        <p>My Children</p>
      </Text>
    );
    expect(wrapper.html()).toBe("<p>My Children</p>");
  });

  it("renders as children inside a tag with a classname", () => {
    const wrapper = shallow(
      <Text wrapper={{ tag: "div", classes: "class1 class2" }}>
        <p>My Children</p>
      </Text>
    );
    expect(wrapper.html()).toBe(
      '<div class="class1 class2"><p>My Children</p></div>'
    );
  });
});
