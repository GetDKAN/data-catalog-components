import React from 'react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './index';

describe('<Card />', () => {
  test('renders', async () => {
    const buttonClick = jest.fn();
    const {container} = render(
      <Card
        headingText="My Card"
        bodyText="Body text."
        buttonText="My button"
        buttonAction={() => buttonClick()}
      />
    );
    expect(container.firstChild).toHaveClass('usa-card') 
    expect(screen.getByRole('heading', {name: "My Card", level: 2})).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: "My Card"})).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: "My Card"})).toHaveClass('usa-card__heading')
    expect(screen.getByText('Body text.')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: "My button"})).toBeInTheDocument();
    await act(async () => {
      userEvent.click(screen.getByText('My button'));
    });
    expect(buttonClick).toHaveBeenCalledTimes(1);
  });

  test('render with header-first', async () => {
    const {container} = render(
      <Card
        cardVariant="header-first"
        headingText="My Card"
        bodyText="Body text."
        buttonText="My button"
        buttonAction={() => buttonClick()}
      />
    );
    expect(container.firstChild).toHaveClass('usa-card--header-first') 
  });
  test('render with flag', async () => {
    const {container} = render(
      <Card
        cardVariant="flag"
        headingText="My Card"
        bodyText="Body text."
        buttonText="My button"
        buttonAction={() => buttonClick()}
      />
    );
    expect(container.firstChild).toHaveClass('usa-card--flag') 
  });
  test('render with flag-right', async () => {
    const {container} = render(
      <Card
        cardVariant="flag-right"
        headingText="My Card"
        bodyText="Body text."
        buttonText="My button"
        buttonAction={() => buttonClick()}
      />
    );
    expect(container.firstChild).toHaveClass('usa-card--flag');
    expect(container.firstChild).toHaveClass('usa-card--media-right') 
  });
  test('render with flag-right', async () => {
    const {container} = render(
      <Card
        cardVariant="flag-right"
        headingText="My Card"
        bodyText="Body text."
        buttonText="My button"
        buttonAction={() => buttonClick()}
      />
    );
    expect(container.firstChild).toHaveClass('usa-card--flag');
    expect(container.firstChild).toHaveClass('usa-card--media-right') 
  });
  test('render with flag-right', async () => {
    const {container} = render(
      <Card
        cardVariant="flag-right"
        headingText="My Card"
        bodyText="Body text."
        buttonText="My button"
        buttonAction={() => buttonClick()}
      />
    );
    expect(container.firstChild).toHaveClass('usa-card--flag');
    expect(container.firstChild).toHaveClass('usa-card--media-right') 
  });
  test('render with inset media', async () => {
    render(
      <Card
        mediaVariant="inset"
        media={<img src="" alt="my media" />}
        headingText="My Card"
        bodyText="Body text."
        buttonText="My button"
        buttonAction={() => buttonClick()}
      />
    );
    expect(screen.getByAltText('my media').closest(".usa-card__media--inset")).toBeTruthy();
  });
  test('render with exdent media', async () => {
    render(
      <Card
        mediaVariant="exdent"
        media={<img src="" alt="my media" />}
        headingText="My Card"
        bodyText="Body text."
        buttonText="My button"
        buttonAction={() => buttonClick()}
      />
    );
    expect(screen.getByAltText('my media').closest(".usa-card__media--exdent")).toBeTruthy();
  });
  test('render with h3 in collection', async () => {
    render(
      <Card
        isCollection
        headingText="My Card"
        bodyText="Body text."
        buttonText="My button"
        buttonAction={() => buttonClick()}
      />
    );
    expect(screen.getByRole('heading', {name: "My Card", level: 3})).toBeInTheDocument();
  });
});
