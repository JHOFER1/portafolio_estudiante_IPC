import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from './Services';

describe('Skills component', () => {
  test('el listado de habilidades tiene al menos 5 elementos', () => {
    render(<Skills />);
    const skillItems = screen.getAllByRole('listitem');
    expect(skillItems.length).toBeGreaterThanOrEqual(5);
  });
});