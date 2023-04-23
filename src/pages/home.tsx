import React from 'react';
import { Search } from '../components/Search';
import { Product } from '../components/Product';
import { ModalProduct } from '../components/ModalProduct/ModalProduct';
import { useCards } from '../components/useCards';

export const Home = () => {
  const {
    cards,
    setCards,
    isLoading,
    error,
    productDetails,
    isOpen,
    setIsOpen,
    setProductDetails,
  } = useCards();

  return (
    <>
      <h1>Home Page</h1>

      <Search setCards={setCards} />
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {isOpen && (
        <ModalProduct
          onClose={() => setIsOpen(false)}
          product={productDetails}
          title="Product Details"
        />
      )}
      <div className="container">
        {cards.map((card) => (
          <Product data={card} key={card.id} isOpen={setIsOpen} setDetails={setProductDetails} />
        ))}
      </div>
    </>
  );
};
