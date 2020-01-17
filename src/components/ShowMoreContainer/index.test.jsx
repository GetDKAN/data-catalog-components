import React from "react";
import { shallow } from "enzyme";
import ShowMoreContainer from ".";

describe("<ShowMoreContainer />", () => {
  const renderedListItems = [
    <li key={1}>1</li>,
    <li key={2}>2</li>,
    <li key={3}>3</li>,
    <li key={4}>4</li>,
    <li key={5}>5</li>,
    <li key={6}>6</li>,
    <li key={7}>7</li>,
    <li key={8}>8</li>,
    <li key={9}>9</li>,
    <li key={10}>10</li>,
    <li key={11}>11</li>,
    <li key={12}>12</li>
  ];

  const renderedDivItems = [
    <div key={1}>1</div>,
    <div key={2}>2</div>,
    <div key={3}>3</div>,
    <div key={4}>4</div>
  ];

  it("renders 4 divs and no showmore button", () => {
    const wrapper = shallow(<ShowMoreContainer items={renderedDivItems} />);
    expect(wrapper.find(".show-more-container div").length).toBe(4);
    expect(wrapper.find(".showmore-button").exists()).toBe(false);
  });

  it("renders 12 list items and a working showmore button", () => {
    const wrapper = shallow(
      <ShowMoreContainer items={renderedListItems} container="ol" />
    );
    expect(wrapper.find("li").length).toBe(10);
    expect(wrapper.exists(".showmore-button")).toBe(true);
    wrapper.find(".showmore-button").simulate("click");
    expect(wrapper.find("li").length).toBe(12);
    wrapper.find(".showmore-button").simulate("click");
    expect(wrapper.find("li").length).toBe(10);
  });

  it("renders correct container types", () => {
    const defaultWrapper = shallow(
      <ShowMoreContainer items={renderedDivItems} />
    );

    const olWrapper = shallow(
      <ShowMoreContainer items={renderedListItems} container="ol" />
    );

    const ulWrapper = shallow(
      <ShowMoreContainer items={renderedListItems} container="ul" />
    );

    const divWrapper = shallow(
      <ShowMoreContainer items={renderedDivItems} container="div" />
    );

    expect(defaultWrapper.exists("div.show-more-container")).toBe(true);
    expect(divWrapper.exists("div.show-more-container")).toBe(true);
    expect(olWrapper.exists("ol.show-more-container")).toBe(true);
    expect(ulWrapper.exists("ul.show-more-container")).toBe(true);
  });

  it("renders correct amount when specific limit is set", () => {
    const wrapper = shallow(
      <ShowMoreContainer items={renderedListItems} limit={5} />
    );
    expect(wrapper.find("li").length).toBe(5);
    wrapper.find(".showmore-button").simulate("click");
    expect(wrapper.find("li").length).toBe(12);
    wrapper.find(".showmore-button").simulate("click");
    expect(wrapper.find("li").length).toBe(5);
  });

  it("renders correct button text", () => {
    const defaultWrapper = shallow(
      <ShowMoreContainer items={renderedListItems} container="ol" />
    );

    const customWrapper = shallow(
      <ShowMoreContainer
        items={renderedListItems}
        container="ol"
        btnOpenText="foo"
        btnClosedText="bar"
      />
    );
    expect(defaultWrapper.find(".showmore-button").text()).toBe("Show 2 more");
    defaultWrapper.find(".showmore-button").simulate("click");
    expect(defaultWrapper.find(".showmore-button").text()).toBe("Show less");

    expect(customWrapper.find(".showmore-button").text()).toBe("bar");
    customWrapper.find(".showmore-button").simulate("click");
    expect(customWrapper.find(".showmore-button").text()).toBe("foo");
  });

  it("renders with correct custom classes", () => {
    const wrapper = shallow(
      <ShowMoreContainer
        items={renderedListItems}
        container="ol"
        containerClasses="container"
        wrapperClasses="wrapper"
      />
    );

    expect(wrapper.exists("ol.container")).toBe(true);
    expect(wrapper.exists("div.wrapper")).toBe(true);
  });
});
