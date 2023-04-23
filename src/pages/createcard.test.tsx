import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { FormCreateCard } from '../pages/createcard';

describe('Create Card', () => {
  it('Render Page Form Create Card', () => {
    render(<FormCreateCard />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Create Card');
  });
});
