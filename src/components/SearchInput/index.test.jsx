import React from "react";
import { mount } from "enzyme";
import SearchInput from "./index";

describe("<SearchInput />", () => {
  const defaultWrapper = mount(
    <SearchInput
      onChangeFunction={event =>
        defaultWrapper.setProps({ value: event.target.value })
      }
    />
  );
  const customWrapper = mount(
    <SearchInput
      onChangeFunction={event =>
        customWrapper.setProps({ value: event.target.value })
      }
      onResetFunction={() => customWrapper.setProps({ value: "" })}
      showSubmit={false}
      value="test"
      resetContent="Custom Reset"
    />
  );

  it('renders with default label of "Search"', () => {
    expect(defaultWrapper.find("label").text()).toBe("Search");
  });
  it("renders with no Reset button", () => {
    expect(defaultWrapper.exists("button#inputReset")).toBe(false);
  });
  it('renders with default button of "Submit"', () => {
    expect(defaultWrapper.find("button#inputSubmit").text()).toBe("Submit");
  });
  it("renders re-renders with input text and default Reset button", () => {
    defaultWrapper
      .find("input")
      .simulate("change", { target: { value: "abcdefg" } });
    expect(defaultWrapper.find("input").props().value).toBe("abcdefg");
    expect(defaultWrapper.find("button#inputReset").text()).toBe("Reset");
  });
  it("renders without Submit button", () => {
    expect(customWrapper.exists("button#inputSubmit")).toBe(false);
  });
  it("resets input value when Reset button is clicked", () => {
    expect(customWrapper.exists("button#inputReset")).toBe(true);
    expect(customWrapper.find("input").props().value).toBe("test");
    expect(customWrapper.find("button#inputReset").text()).toBe("Custom Reset");
    customWrapper.find("button#inputReset").simulate("click");
    expect(customWrapper.find("input").props().value).toBe("");
  });
});
