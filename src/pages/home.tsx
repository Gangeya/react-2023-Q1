import { Search } from '../components/Search';
import React from 'react';
import { Product } from '../components/Product';
import { products } from '../data';
import { TProduct } from '../types';

export class Home extends React.Component {

  render() {
    return (
      <>
        <h1>Home Page</h1>
        <Search />
        <div className="container">
          {
            products.map(product => <Product {...product} />)
          }
          {/* <Product product={products[0]} />
          <Product {...products[1]} />
          <Product {...products[2]} /> */}
        </div>

      </>

    )
  }
}