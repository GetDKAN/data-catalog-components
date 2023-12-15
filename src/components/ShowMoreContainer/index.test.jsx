import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
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

  it('renders 4 divs and no showmore button', () => {
    render(
      <ShowMoreContainer
        items={renderedDivItems}
      />,
    );
    // expect(wrapper.find('.show-more-container div').length).toBe(4);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders 12 list items and a working showmore button', async () => {
    render(
      <ShowMoreContainer
        items={renderedListItems}
        container="ol"
      />,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(10);
    expect(screen.getByRole('button', 'Show 2 more')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', 'Show 2 more'));
    expect(screen.queryAllByRole('listitem')).toHaveLength(12);
    await userEvent.click(screen.getByRole('button', 'Show Less'));
    expect(screen.queryAllByRole('listitem')).toHaveLength(10);
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

  it('renders correct amount when specific limit is set', async () => {
    render(
      <ShowMoreContainer
        items={renderedListItems}
        limit={5}
      />,
    );
    expect(screen.queryAllByRole('listitem')).toHaveLength(5);
    expect(screen.getByRole('button', 'Show 7 more')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', 'Show 7 more'));
    expect(screen.queryAllByRole('listitem')).toHaveLength(12);
    await userEvent.click(screen.getByRole('button', 'Show Less'));
    expect(screen.queryAllByRole('listitem')).toHaveLength(5);
  });

  it('renders correct button text', async () => {
    render(
      <ShowMoreContainer
        items={renderedListItems}
        container="ol"
      />,
    );

    expect(screen.getByText('Show 2 more')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', 'Show 2 more'));
    expect(screen.getByText('Show less')).toBeInTheDocument();
  });

  it('renders correct custom button text', async () => {
    render(
      <ShowMoreContainer
        items={renderedListItems}
        container="ol"
        btnOpenText="foo"
        btnClosedText="bar"
      />,
    );
    expect(screen.queryByText('bar')).toBeInTheDocument();
    expect(screen.queryByText('foo')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', 'bar'));
    expect(screen.queryByText('bar')).not.toBeInTheDocument();
    expect(screen.queryByText('foo')).toBeInTheDocument();
  });

  it('renders with correct custom classes', () => {
    render(
      <ShowMoreContainer
        items={renderedListItems}
        container="ol"
        containerClasses="container"
        wrapperClasses="wrapper"
      />,
    );

    expect(screen.getByRole('list')).toHaveClass("container");
    //expect(wrapper.exists('div.wrapper')).toBe(true);
  });
});
