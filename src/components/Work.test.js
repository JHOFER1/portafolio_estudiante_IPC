import React from 'react';
import { render, screen } from '@testing-library/react';
import Work from './Work';

describe('Work component', () => {
  test('el listado de proyectos tiene al menos 3 elementos', () => {
    render(<Work />);
    // Busca imágenes de proyectos por alt
    const projectImages = [
      screen.getByAltText(/chatbot/i),
      screen.getByAltText(/e-commerce/i),
      screen.getByAltText(/erp/i)
    ];
    expect(projectImages.length).toBeGreaterThanOrEqual(3);
  });
});