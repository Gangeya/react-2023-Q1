import React from 'react';
import { TProduct } from '../types';

export class Product extends React.Component<TProduct> {
  constructor(props: TProduct) {
    super(props);
  }
  render() {
    return (
      <div className="product">
        <p>{this.props.title}</p>
        <img data-testid="img-id" src={this.props.image} alt={this.props.title} />
        <p>{this.props.category}</p>
        <p>Price: {this.props.price}</p>
        <p>Rate: {this.props.rating.rate}</p>
        <p>Count: {this.props.rating.count}</p>
      </div>
    );
  }
}
