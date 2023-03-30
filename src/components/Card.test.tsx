import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Card } from '../components/Card';
const card = {
  id: '1',
  name: 'Eugene',
  date: '1983-11-23',
  country: 'Belarus',
  gender: 'male',
  image: 'url',
};
describe('Card', () => {
  it('Correct rendering of Card Component', () => {
    render(<Card {...card} />);
    expect(screen.getByText(card.name)).toBeInTheDocument();
    expect(screen.getByTestId('img-id')).toBeInTheDocument();
    expect(screen.getByText(`Date of Birth: ${card.date}`)).toBeInTheDocument();
    expect(screen.getByText(`Country: ${card.country}`)).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${card.gender}`)).toBeInTheDocument();
  });
});