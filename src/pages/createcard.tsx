import React, { RefObject } from 'react';
import { InputDate } from '../components/InputDate';
import { TextInput } from '../components/TextItput';
import { Select } from '../components/select';
import { InputCheckBox } from '../components/InputCheckBox';
import { InputRadio } from '../components/InputRadio';
import { Card } from '../components/Card';
import { TCard } from '../types';
import { TCardState } from '../types';

export class FormCreateCard extends React.Component<Record<string, unknown>, TCardState> {
  inputName: RefObject<TextInput>;
  inputDate: RefObject<InputDate>;
  inputSelect: RefObject<Select>;
  inputCheckBox: RefObject<InputCheckBox>;
  inputRadio: RefObject<InputRadio>;

  constructor(props: never) {
    super(props);

    this.state = {
      cards: [
        {
          id: 1,
          name: 'Eugene',
          date: new Date(1983 - 11 - 23).toISOString().slice(0, 10),
          country: 'Belarus',
          gender: 'Male',
        },
      ],
    };

    this.inputName = React.createRef();
    this.inputDate = React.createRef();
    this.inputSelect = React.createRef();
    this.inputCheckBox = React.createRef();
    this.inputRadio = React.createRef();
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const name = this.inputName.current!.textInput.current!.value.trim();
    this.inputName.current?.checkName(name);

    const date = this.inputDate.current!.dateInput.current!.value;
    this.inputDate.current?.checkDate(date);

    const select = this.inputSelect.current!.select.current!.value;
    this.inputSelect.current?.checkSelect(select);

    const checkBox = this.inputCheckBox.current!.checkInput.current!.checked;
    this.inputCheckBox.current?.checkCheckBox(checkBox);

    const radio1 = this.inputRadio.current!.radio1.current!;
    const radio2 = this.inputRadio.current!.radio2.current!;
    this.inputRadio.current?.checkRadio([radio1, radio2]);
  };
  render() {
    return (
      <>
        <div className="form-wrapper">
          <h1>Create Card</h1>
          <form className="form" onSubmit={this.submitHandler}>
            <div>
              <TextInput ref={this.inputName} />
              <InputDate ref={this.inputDate} />
              <Select ref={this.inputSelect} />
              <InputCheckBox ref={this.inputCheckBox} />
              <InputRadio ref={this.inputRadio} />
              <button type="submit" value="Submit">
                Create Card
              </button>
            </div>
          </form>
        </div>

        <div className="container">
          <Card {...this.state.cards[0]} />
          {/* {cards.map((card) => (
            <Card {...card} />
          ))} */}
        </div>
      </>
    );
  }
}
