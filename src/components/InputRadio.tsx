import React from 'react';
import { TInputProps } from '../types';
export const InputRadio = ({ label, register, required }: TInputProps) => {

  return (
    <div>
      <fieldset>
        <legend>Sex</legend>
        <label htmlFor="sex">
          <input type="radio" value="male" {...register(label, { required })} />
            Male
          </label>
        <label htmlFor="sex">
          <input type="radio" value="female" {...register(label, { required })} />
            Female
          </label>
      </fieldset>
    </div>
  );
}

