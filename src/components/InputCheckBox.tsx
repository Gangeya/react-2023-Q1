import React, { RefObject } from 'react';
import { CustomError } from '../components/Error';
import { TCheckBoxState } from '../types';

export class InputCheckBox extends React.Component<Record<string, unknown>, TCheckBoxState> {
  checkInput: RefObject<HTMLInputElement>;
  constructor(props: never) {
    super(props);
    this.checkInput = React.createRef();

    this.state = {
      isValid: false,
      error: ''
    }
  }
  setChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      isValid: !this.state.isValid,
    });
  }

  checkCheckBox(value: boolean) {
    if (!value) {
      this.setState({
        error: 'Please set checked!'
      })
    }
  }
  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.state.isValid}
            onChange={this.setChecked}
            ref={this.checkInput} />
          I agree to the processing of personal data
        </label>
        {!this.state.isValid && <CustomError message={this.state.error} />}
      </div>
    )
  }
}