import React, { RefObject } from 'react';
import { TextInput } from '../components/TextItput';

export class FormCreateCard extends React.Component {
  inputName: RefObject<TextInput>;

  constructor(props: never) {
    super(props);

    this.state = {
      name: '',
    };

    this.inputName = React.createRef();
    this.checkForm = this.checkForm.bind(this);
  }

  checkForm() {
    const name = this.inputName.current!.textInput.current!.value.trim();
    this.inputName.current?.checkName(name);
  }
  render() {
    return (
      <div className="form-wrapper">
        <h1>Create Card</h1>
        <form className="form">
          <div>
            <TextInput ref={this.inputName} />
            <input type="button" value="Get Name" onClick={this.checkForm} />
          </div>
        </form>
      </div>
    );
  }
}
