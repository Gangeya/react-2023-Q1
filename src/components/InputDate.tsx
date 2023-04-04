import React, { forwardRef, RefObject } from 'react';
type Inputs = {
  name: string,
};
export const InputDate = forwardRef<HTMLInputElement, Inputs>(({ name }, ref) => {

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
    <div>
      <p>Select date of birth</p>
      <input name={name} type="date" ref={ref} />
    </div>
  );
});
