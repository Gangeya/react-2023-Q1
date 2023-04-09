import React from 'react';
import { Search } from '../components/Search';
import { Product } from '../components/Product';
import { ModalProduct } from '../components/ModalProduct/ModalProduct';
import { useCards } from '../components/useCards';

export const Home = () => {

  const { products, isLoading, error, productDetails, isOpen, setIsOpen, setProductDetails } = useCards();

  return (
    <>
      <h1>Home Page</h1>

      <Search />
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {isOpen && <ModalProduct onClose={() => setIsOpen(false)} product={productDetails} title="Product Details" />}
      <div className="container">
        {products.map((product) => (
          <Product data={product} key={product.id} isOpen={setIsOpen} setDetails={setProductDetails} />
        ))}
      </div>
    </>
  );
}
