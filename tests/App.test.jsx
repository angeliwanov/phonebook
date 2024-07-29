import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from '../src/App';

describe('App', () => {
  test('renders headline', () => {
    render(<App />);
    expect(screen.getByText('Phonebook')).toBeVisible();
  });
});
