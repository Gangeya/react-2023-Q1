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
      error: '',
    };
  }

  checkCheckBox(value: boolean) {
    if (!value) {
      this.setState({
        isValid: false,
        error: 'Please set checked!',
      });
    } else {
      this.setState({ isValid: true });
    }
  }
  render() {
    return (
      <div>
        <label>
          <input type="checkbox" ref={this.checkInput} />I agree to the processing of personal data
        </label>
        {!this.state.isValid && <CustomError message={this.state.error} />}
      </div>
    );
  }
}
