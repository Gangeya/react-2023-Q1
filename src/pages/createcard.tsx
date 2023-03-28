import React, { RefObject } from 'react';
import uuid from 'react-uuid';
import { InputDate } from '../components/InputDate';
import { TextInput } from '../components/TextItput';
import { Select } from '../components/select';
import { InputCheckBox } from '../components/InputCheckBox';
import { InputRadio } from '../components/InputRadio';
import { InputFile } from '../components/InputFile';
import { Card } from '../components/Card';
import { TCard } from '../types';
import { TCardState } from '../types';

export class FormCreateCard extends React.Component<Record<string, unknown>, TCardState> {
  inputName: RefObject<TextInput>;
  inputDate: RefObject<InputDate>;
  inputSelect: RefObject<Select>;
  inputCheckBox: RefObject<InputCheckBox>;
  inputRadio: RefObject<InputRadio>;
  inputFile: RefObject<InputFile>;

  constructor(props: never) {
    super(props);

    this.state = {
      cards: [],
    };

    this.inputName = React.createRef();
    this.inputDate = React.createRef();
    this.inputSelect = React.createRef();
    this.inputCheckBox = React.createRef();
    this.inputRadio = React.createRef();
    this.inputFile = React.createRef();
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const errorList = [];

    const name = this.inputName.current!.textInput.current!.value.trim();
    errorList.push(this.inputName.current?.checkName(name));

    const date = this.inputDate.current!.dateInput.current!.value;
    errorList.push(this.inputDate.current?.checkDate(date));

    const select = this.inputSelect.current!.select.current!.value;
    errorList.push(this.inputSelect.current?.checkSelect(select));

    const checkBox = this.inputCheckBox.current!.checkInput.current!.checked;
    errorList.push(this.inputCheckBox.current?.checkCheckBox(checkBox));

    const radio1 = this.inputRadio.current!.radio1.current!;
    const radio2 = this.inputRadio.current!.radio2.current!;
    const { gender, isValid } = this.inputRadio.current!.checkRadio([radio1, radio2]);
    errorList.push(isValid);

    const img = this.inputFile.current?.imageRef.current?.files?.[0];
    const { imgUrl, imgIsValid } = this.inputFile.current!.getImg(img);
    errorList.push(imgIsValid);

    if (!errorList.some((el) => el === false)) {
      const card: TCard = {
        id: uuid(),
        name: name,
        date: date,
        country: select,
        gender: gender,
        image: imgUrl,
      };

      const cardsList = this.state.cards;
      cardsList.push(card);

      this.setState({
        cards: cardsList,
      });
      alert('Card successfully');
      this.inputName.current!.textInput.current!.value = '';
      this.inputDate.current!.dateInput.current!.value = new Date().toISOString();
      this.inputSelect.current!.select.current!.value = '';
      this.inputCheckBox.current!.checkInput.current!.checked = false;
      this.inputRadio.current!.radio1.current!.checked = false;
      this.inputRadio.current!.radio2.current!.checked = false;
      this.inputFile.current!.imageRef.current!.value = '';
    }
  };
  render() {
    return (
      <>
        <div className="form-wrapper">
          <h1>Create Card</h1>
          <form className="form" onSubmit={this.submitHandler}>
            <div className="container">
              <TextInput ref={this.inputName} />
              <InputDate ref={this.inputDate} />
              <Select ref={this.inputSelect} />
              <InputCheckBox ref={this.inputCheckBox} />
              <InputRadio ref={this.inputRadio} />
              <InputFile ref={this.inputFile} />
            </div>
            <button type="submit" value="Submit">
              Create Card
            </button>
          </form>
        </div>

        <div className="container">
          {this.state.cards.map((card) => (
            <Card {...card} key={card.id} />
          ))}
        </div>
      </>
    );
  }
}
