import React, { RefObject } from 'react';
import { InputDate } from '../components/InputDate';
import { TextInput } from '../components/TextItput';
import { Select } from '../components/select';
import { InputCheckBox } from '../components/InputCheckBox';
import { InputRadio } from '../components/InputRadio';

export class FormCreateCard extends React.Component {
  inputName: RefObject<TextInput>;
  inputDate: RefObject<InputDate>;
  inputSelect: RefObject<Select>;
  inputCheckBox: RefObject<InputCheckBox>;
  inputRadio: RefObject<InputRadio>;

  constructor(props: never) {
    super(props);

    this.state = {
      name: '',
      date: '',
    };

    this.inputName = React.createRef();
    this.inputDate = React.createRef();
    this.inputSelect = React.createRef();
    this.inputCheckBox = React.createRef();
    this.inputRadio = React.createRef();
    this.checkForm = this.checkForm.bind(this);
  }

  checkForm() {
    const name = this.inputName.current!.textInput.current!.value.trim();
    this.inputName.current?.checkName(name);

    const date = this.inputDate.current!.dateInput.current!.value;
    this.inputDate.current?.checkDate(date);

    const select = this.inputSelect.current!.select.current!.value;
    this.inputSelect.current?.checkSelect(select);

    const checkBox = this.inputCheckBox.current!.checkInput.current!.checked;
    this.inputCheckBox.current?.checkCheckBox(checkBox);

    const radio1 = this.inputRadio.current?.radio1.current;
    const radio2 = this.inputRadio.current?.radio2.current;
    this.inputRadio.current?.checkRadio([radio1, radio2]);
  }
  render() {
    return (
      <div className="form-wrapper">
        <h1>Create Card</h1>
        <form className="form">
          <div>
            <TextInput ref={this.inputName} />
            <InputDate ref={this.inputDate} />
            <Select ref={this.inputSelect} />
            <InputCheckBox ref={this.inputCheckBox} />
            <InputRadio ref={this.inputRadio} />
            <input type="button" value="Submit" onClick={this.checkForm} />
          </div>
        </form>
      </div>
    );
  }
}
