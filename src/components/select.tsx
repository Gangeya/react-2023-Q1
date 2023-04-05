import React from 'react';
import { TInputProps } from '../types';
export const Select = ({ label, register, required }: TInputProps) => {

  return (
    <>
      <label>
        Selct Coutry:
          <select
          defaultValue=""
          className="select"
          {...register(label, { required })}
        >
          <option
            value=""
            disabled
          >Select Country</option>
          <option value="Belarus">Belarus</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Poland">Poland</option>
          <option value="Germany">Germany</option>
        </select>
      </label>

    </>
  );
}

