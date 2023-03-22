import React from 'react';
import { describe, it } from 'vitest';
import { getByTestId, render, screen } from '@testing-library/react';

import { products } from '../data';
import { Product } from './Product';

describe('Product', () => {
  it('Correct rendreing of Product Component', () => {
    render(<Product {...products[0]} />);

    expect(screen.getByText(products[0].title)).toBeInTheDocument();
    expect(screen.getByTestId('img-id')).toBeInTheDocument();
    expect(screen.getByText(`Price: ${products[0].price}`)).toBeInTheDocument();
    expect(screen.getByText(`Rate: ${products[0].rating.rate}`)).toBeInTheDocument();
    expect(screen.getByText(`Count: ${products[0].rating.count}`)).toBeInTheDocument();
    expect(screen.getByText(products[0].category)).toBeInTheDocument();
  });
});