import React, { RefObject } from 'react';
import { CustomError } from '../components/Error';
import { TCheckBoxState } from '../types';

export class InputRadio extends React.Component<Record<string, unknown>, TCheckBoxState> {
  radio1: RefObject<HTMLInputElement>;
  radio2: RefObject<HTMLInputElement>;

  constructor(props: never) {
    super(props);

    this.radio1 = React.createRef();
    this.radio2 = React.createRef();

    this.state = {
      isValid: true,
      error: 'You must choose a gender',
    };
  }

  checkRadio([...arr]: HTMLInputElement[]): { gender: string; isValid: boolean } {
    const radioValue = arr.find((el) => el.checked === true)!;

    if (radioValue) {
      this.setState({
        isValid: true,
      });
      return {
        gender: radioValue.value,
        isValid: true,
      };
    }

    this.setState({
      isValid: false,
    });
    return {
      gender: '',
      isValid: false,
    };
  }
  render() {
    return (
      <div>
        <fieldset>
          <legend>Sex</legend>
          <label htmlFor="sex">
            <input type="radio" name="sex" value="male" ref={this.radio1} />
            Male
          </label>
          <label htmlFor="sex">
            <input type="radio" name="sex" value="female" ref={this.radio2} />
            Female
          </label>
          {!this.state.isValid && <CustomError message={this.state.error} />}
        </fieldset>
      </div>
    );
  }
}
