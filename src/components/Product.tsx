import React from 'react';
import { TProduct } from '../types';

interface IProduct {
  data: TProduct;
  isOpen: (value: boolean) => void;
  setDetails: (value: TProduct) => void;
}

export const Product = ({ data, isOpen, setDetails }: IProduct) => {
  return (
    <div
      className="product"
      onClick={() => {
        isOpen(true);
        setDetails(data);
      }}
      role="presentation"
    >
      <p>{data.title}</p>
      <img data-testid="img-id" src={data.thumbnail} alt={data.title} />
      <p>{data.category}</p>
      <p>Price: {data.price}</p>
      <p>Rate: {data.rating}</p>
      <p>Count: {data.stock}</p>
    </div>
  );
};
