import { Search } from '../components/Search';
import React from 'react';
import { Product } from '../components/Product';
import { products } from '../data';

export class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Home Page</h1>
        <Search />
        <div className="container">
          {products.map((product) => (
            <Product {...product} key={product.id} />
          ))}
        </div>
      </>
    );
  }
}
