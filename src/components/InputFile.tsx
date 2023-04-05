import React from 'react';
import { TInputProps } from '../types';
export const InputFile = ({ label, register, required }: TInputProps) => {
  return (
    <>
      <p>Add Image</p>
      <input
        type="file"

        {...register(label, {
          required: 'File is required',
          validate: {
            acceptedFormats: (files) =>
              ['image/jpeg', 'image/png', 'image/gif'].includes(
                files[0]?.type
              ) || "Only PNG, JPEG and GIF are supported"
          }
        })} />
    </>
  );
}

