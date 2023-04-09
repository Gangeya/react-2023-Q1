import React, { useEffect, useState } from 'react';
import { TProduct } from 'types';

export function useCards() {
  const [cards, setCards] = useState<TProduct[]>([]);
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
      setCards(data.products);
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

  return {
    cards,
    isLoading,
    error,
    productDetails,
    isOpen,
    setIsLoading,
    setCards,
    setError,
    setIsOpen,
    setProductDetails
  }
}