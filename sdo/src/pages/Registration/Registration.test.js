import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './Component'; // Импортируйте ваш компонент

describe('Component', () => {
  test('renders component with correct text', () => {
    render(<Component />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});
