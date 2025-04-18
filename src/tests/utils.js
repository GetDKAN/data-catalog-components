import { screen } from '@testing-library/react';

export const getByTextContent = (text) => {
  return screen.getByText((content, element) => {
    const hasText = element => element.textContent === text
    const elementHasText = hasText(element)
    const childrenDontHaveText = Array.from(element?.children || []).every(child => !hasText(child))
    return elementHasText && childrenDontHaveText
  });
};