import React, { RefObject } from 'react';
import { CustomError } from '../components/Error';
import { TDateInputState } from '../types';

export class InputDate extends React.Component<Record<string, unknown>, TDateInputState> {
  dateInput: RefObject<HTMLInputElement>;
  constructor(props: never) {
    super(props);
    this.dateInput = React.createRef();
    this.state = {
      isValid: false,
      error: '',
    };
  }

  checkDate = (value: string) => {
    console.log(value);
    const date = new Date(value);
    const currentDate = new Date();
    const fullYears = currentDate.getFullYear() - date.getFullYear();

    if (date > currentDate) {
      this.setState({
        isValid: false,
        error: 'The date cannot be greater than the current date.',
      });
    } else {
      if (fullYears < 18) {
        this.setState({
          isValid: false,
          error: 'Only 18+',
        });
        return;
      } else {
        this.setState({
          isValid: true,
        });
      }
    }
  };

  render() {
    return (
      <div>
        <p>Select date of birth</p>
        <input type="date" ref={this.dateInput} />
        {!this.state.isValid && <CustomError message={this.state.error} />}
      </div>
    );
  }
}
