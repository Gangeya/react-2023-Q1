import React, { RefObject } from 'react';
import { CustomError } from '../components/Error';
import { TDateInputState } from '../types';

export class InputDate extends React.Component<Record<string, unknown>, TDateInputState> {
  dateInput: RefObject<HTMLInputElement>
  constructor(props: never) {
    super(props);
    this.dateInput = React.createRef();

    this.state = {
      isValid: true,
      dateValue: new Date().toISOString().slice(0, 10),
      error: '',
    };
  }

  checkDate = (value: string) => {
    const date = new Date(value);
    const currentDate = new Date();
    console.log('Current date: ' + currentDate);
    console.log('Selected date: ' + date);

    const fullYears = currentDate.getFullYear() - date.getFullYear()
    console.log(`Full years: ${fullYears}`);



    if (date > currentDate) {
      this.setState({
        isValid: false,
        error: 'The date cannot be greater than the current date.'
      })
    } else {
      if (fullYears < 18) {
        this.setState({
          isValid: false,
          error: 'Only 18+'
        });
        return;
      } else {
        this.setState({
          isValid: true,
        });
      }
    }
  }

  setDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ dateValue: e.target.value });
  }

  render() {


    return (
      <div>
        <p>Select date of birth</p>
        <input
          type="date"
          ref={this.dateInput}
          value={this.state.dateValue}
          onChange={this.setDate}
        />
        <hr />
        {this.state.dateValue}
        {!this.state.isValid && <CustomError message={this.state.error} />}
      </div>
    )
  }
}