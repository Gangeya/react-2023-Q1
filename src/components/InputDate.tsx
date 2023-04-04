import React from 'react';
import { TInputProps } from '../types';
export const InputDate = ({ label, register, required }: TInputProps) => {

  // checkDate = (value: string) => {
  //   const date = new Date(value);
  //   const currentDate = new Date();
  //   const fullYears = currentDate.getFullYear() - date.getFullYear();

  //   if (!value) {
  //     this.setState({
  //       isValid: false,
  //       error: 'Invalid date',
  //     });
  //     return false;
  //   }
  //   if (date > currentDate) {
  //     this.setState({
  //       isValid: false,
  //       error: 'The date cannot be greater than the current date.',
  //     });
  //     return false;
  //   }

  //   if (fullYears < 18) {
  //     this.setState({
  //       isValid: false,
  //       error: 'Only 18+',
  //     });
  //     return false;
  //   }

  //   this.setState({
  //     isValid: true,
  //   });
  //   return true;
  // };

  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} type="date" />
    </>
  );
}
