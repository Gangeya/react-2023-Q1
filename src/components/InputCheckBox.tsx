import React from 'react';
import { TInputProps } from '../types';

export const InputCheckBox = ({ label, register, required }: TInputProps) => {

  return (
    <div>
      <label>
        <input type="checkbox" {...register(label, { required })} />I agree to the processing of personal data
      </label>
    </div>
  );
};
