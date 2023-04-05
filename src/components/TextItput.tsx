import React from 'react';
import { TInputProps } from '../types';

export const TextInput = ({ label, register, required }: TInputProps) => (
  <>
    <label>{label}</label>
    <input
      type="text"
      {...register(label, {
        required: 'Name is required!',
        minLength: { value: 3, message: 'Too Short' },
      })}
    />
  </>
);
