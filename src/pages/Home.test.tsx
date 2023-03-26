import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Home } from './home';

describe('Home', () => {
  it('Render Home Page', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home Page');
  });
});
