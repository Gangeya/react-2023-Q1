import React from 'react';
import { TInputProps } from '../types';

export const TextInput = ({ label, register, required }: TInputProps) => (
  <>
    <label>{label}</label>
    <input type="text" {...register(label, { required })} />
  </>
);
