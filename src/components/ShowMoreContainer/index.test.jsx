import React from 'react';
import { render, screen } from '@testing-library/react';
import ShowMoreContainer from '.';

describe('<ShowMoreContainer />', () => {
  const renderedListItems = [
    (<li key={1}>1</li>),
    (<li key={2}>2</li>),
    (<li key={3}>3</li>),
    (<li key={4}>4</li>),
    (<li key={5}>5</li>),
    (<li key={6}>6</li>),
    (<li key={7}>7</li>),
    (<li key={8}>8</li>),
    (<li key={9}>9</li>),
    (<li key={10}>10</li>),
    (<li key={11}>11</li>),
    (<li key={12}>12</li>),
  ];

  const renderedDivItems = [
    (<div key={1}>1</div>),
    (<div key={2}>2</div>),
    (<div key={3}>3</div>),
    (<div key={4}>4</div>),
  ];

  it.skip('renders 4 divs and no showmore button', () => {
    render(
      <ShowMoreContainer
        items={renderedDivItems}
      />,
    );
    expect(wrapper.find('.show-more-container div').length).toBe(4);
    expect(wrapper.find('.showmore-button').exists()).toBe(false);
  });

  it.skip('renders 12 list items and a working showmore button', () => {
    render(
      <ShowMoreContainer
        items={renderedListItems}
        container="ol"
      />,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(10);
    expect(wrapper.exists('.showmore-button')).toBe(true);
    wrapper.find('.showmore-button').simulate('click');
    expect(wrapper.find('li').length).toBe(12);
    wrapper.find('.showmore-button').simulate('click');
    expect(wrapper.find('li').length).toBe(10);
  });

  it.skip('renders correct container types', () => {
    render(
      <ShowMoreContainer
        items={renderedDivItems}
      />,
    );

    render(
      <ShowMoreContainer
        items={renderedListItems}
        container="ol"
      />,
    );

    render(
      <ShowMoreContainer
        items={renderedListItems}
        container="ul"
      />,
    );

    render(
      <ShowMoreContainer
        items={renderedDivItems}
        container="div"
      />,
    );

    expect(screen.exists('div.show-more-container')).toBe(true);
    expect(divWrapper.exists('div.show-more-container')).toBe(true);
    expect(screen.getByRole('list')).toHaveClass('show-more-container');
  });

  it.skip('renders correct amount when specific limit is set', () => {
    render(
      <ShowMoreContainer
        items={renderedListItems}
        limit={5}
      />,
    );
    expect(wrapper.find('li').length).toBe(5);
    wrapper.find('.showmore-button').simulate('click');
    expect(wrapper.find('li').length).toBe(12);
    wrapper.find('.showmore-button').simulate('click');
    expect(wrapper.find('li').length).toBe(5);
  });

  it.skip('renders correct button text', () => {
    render(
      <ShowMoreContainer
        items={renderedListItems}
        container="ol"
      />,
    );

    render(
      <ShowMoreContainer
        items={renderedListItems}
        container="ol"
        btnOpenText="foo"
        btnClosedText="bar"
      />,
    );
    expect(defaultWrapper.find('.showmore-button').text()).toBe('Show 2 more');
    defaultWrapper.find('.showmore-button').simulate('click');
    expect(defaultWrapper.find('.showmore-button').text()).toBe('Show less');

    expect(customWrapper.find('.showmore-button').text()).toBe('bar');
    customWrapper.find('.showmore-button').simulate('click');
    expect(customWrapper.find('.showmore-button').text()).toBe('foo');
  });

  it.skip('renders with correct custom classes', () => {
    render(
      <ShowMoreContainer
        items={renderedListItems}
        container="ol"
        containerClasses="container"
        wrapperClasses="wrapper"
      />,
    );

    expect(wrapper.exists('ol.container')).toBe(true);
    expect(wrapper.exists('div.wrapper')).toBe(true);
  });
});
