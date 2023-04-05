import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { About } from './aboutus';

describe('About us', () => {
  it('Render About Page', () => {
    render(<About />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About Page');
  });
});
