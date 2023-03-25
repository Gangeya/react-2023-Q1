import React, { RefObject } from 'react';
import { CustomError } from '../components/Error';
import { TTextInputState } from '../types';


export class TextInput extends React.Component<Record<string, unknown>, TTextInputState> {
  textInput: RefObject<HTMLInputElement>;

  constructor(props: never) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      isValid: true,
      error: '',
    };
  }

  checkName = (value: string) => {
    console.log('Name: ' + value);
    if (!value) {
      this.setState({
        isValid: false,
        error: 'The field must not be empty',
      });
    } else if (value[0] !== value[0].toUpperCase()) {
      this.setState({
        isValid: false,
        error: 'The first letter must be capitalized',
      });
    } else {
      this.setState({
        isValid: true,
      });
    }
  };

  render() {
    return (
      <div>
        <p>Enter your name</p>
        <input type="text" ref={this.textInput} />
        {!this.state.isValid && <CustomError message={this.state.error} />}
      </div>
    );
  }
}
