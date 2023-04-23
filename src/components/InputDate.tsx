import React from 'react';
import { TInputProps } from '../types';
export const InputDate = ({ label, register, required }: TInputProps) => {
  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} type="date" />
    </>
  );
};
