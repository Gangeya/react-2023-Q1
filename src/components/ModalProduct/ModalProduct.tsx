import React from 'react';
import uuid from 'react-uuid';
import { TProduct } from '../../types';

interface IProduct {
  product: TProduct;
  title: string;
  onClose: () => void;
}

export const ModalProduct = ({ product, title, onClose }: IProduct) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-wrap">
        <h2>{title}</h2>
        <p>Title: {product.title}</p>
        <p>Brand: {product.brand}</p>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating}</p>
        <p className="modal-images">
          {product.images.map((image) => (<img key={uuid()} src={image} alt={product.title} />))}
        </p>
        <p>{product.description}</p>
        <button
          onClick={() => onClose()}
        >Close</button>
      </div>
    </div>
  );
}