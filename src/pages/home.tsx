import { Search } from '../components/Search';
import React, { useEffect, useState } from 'react';
import { Product } from '../components/Product';
import { TProduct } from 'types';
import { ModalProduct } from '../components/ModalProduct/ModalProduct';
import axios from 'axios';

export const Home = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [productDetails, setProductDetails] = useState<TProduct>({
    id: 1,
    title: 'Test',
    brand: '',
    price: 0,
    description: '',
    discountPercentage: 0,
    category: '',
    images: [],
    rating: 0,
    stock: 0,
    thumbnail: '',
  })

  async function fetchData() {
    try {
      setError('');
      setIsLoading(true);
      const res = await fetch('https://dummyjson.com/products?limit=10');
      const data = await res.json();
      setProducts(data.products);
      setIsLoading(false);
    } catch (e: unknown) {
      setIsLoading(false);
      const error = e as Error;
      setError(error.message)

    }

  }

  useEffect(() => {
    fetchData();
  }, [])

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
