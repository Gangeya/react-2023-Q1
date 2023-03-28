import React from 'react';
import { TCard } from '../types';

export class Card extends React.Component<TCard> {
  constructor(props: TCard) {
    super(props);
  }
  render() {
    return (
      <div className="product">
        <h2>{this.props.name}</h2>
        <img data-testid="img-id" src={this.props.image} alt={this.props.name} />
        <p>Date of Birth: {this.props.date}</p>
        <p>Country: {this.props.country}</p>
        <p>Gender: {this.props.gender}</p>
      </div>
    );
  }
}
