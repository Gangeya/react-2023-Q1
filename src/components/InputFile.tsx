import React, { RefObject } from 'react';
import { CustomError } from '../components/Error';
import { TTextInputState } from '../types';

export class InputFile extends React.Component<Record<string, unknown>, TTextInputState> {
  imageRef: RefObject<HTMLInputElement>;
  constructor(props: never) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      isValid: true,
      error: '',
    };
  }

  getImg(file: File | undefined): { imgUrl: string; imgIsValid: boolean } {
    if (!file) {
      this.setState({ isValid: false, error: 'Image is required' });
      return { imgUrl: '', imgIsValid: false };
    }
    this.setState({ isValid: true });
    return {
      imgUrl: URL.createObjectURL(file),
      imgIsValid: true,
    };
  }

  render() {
    return (
      <div>
        <p>Add Image</p>
        <input type="file" ref={this.imageRef} />
        {!this.state.isValid && <CustomError message={this.state.error} />}
      </div>
    );
  }
}
