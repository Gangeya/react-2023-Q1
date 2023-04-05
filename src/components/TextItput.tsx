import React from 'react';
import { TInputProps } from '../types';

export const TextInput = ({ label, register, required }: TInputProps) => (
  <>
    <label>{label}</label>
    <input
      type="text"
      {...register(label, {
        required: 'Name is required!',
        pattern: {
          value: /^[A-Z][a-z0-9_-]{3,19}$/,
          message: 'First letter must be uppercase, minimum 3 letters',
        },
      })}
    />
  </>
);
