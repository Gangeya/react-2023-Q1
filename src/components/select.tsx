import React, { RefObject } from 'react';
import { TSelectState } from '../types';
import { CustomError } from '../components/Error';

export class Select extends React.Component<Record<string, unknown>, TSelectState> {
  select: RefObject<HTMLSelectElement>

  constructor(props: never) {
    super(props);

    this.select = React.createRef();

    this.state = {
      isValid: true,
      value: '',
      error: ''
    }
  }

  setSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ value: e.target.value });
  }

  checkSelect(value: string): void {
    const selectValue = value.trim();

    if (selectValue) {
      this.setState({
        value: selectValue,
        isValid: true,
      });
    } else {
      this.setState({
        isValid: false,
        error: 'Choose the country please'
      })
    }
  }

  render() {
    return (
      <div>
        <label>
          Selct Coutry:
          <select
            ref={this.select}
            value={this.state.value}
            onChange={this.setSelect}
            className="select">
            <option value=""></option>
            <option value="Belarus">Belarus</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Poland">Poland</option>
            <option value="Germany">Germany</option>
          </select>
        </label>
        {!this.state.isValid && <CustomError message={this.state.error} />}
      </div>
    )
  }
}