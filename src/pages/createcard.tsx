import React, { useState } from 'react';
import { Path, useForm, UseFormRegister } from 'react-hook-form';
import uuid from 'react-uuid';
import { InputDate } from '../components/InputDate';
import { TextInput } from '../components/TextItput';
import { IFormValues } from '../types';
import { Select } from '../components/select';
import { InputCheckBox } from '../components/InputCheckBox';
import { InputRadio } from '../components/InputRadio';
import { InputFile } from '../components/InputFile';
import { Card } from '../components/Card';
import { TCard } from '../types';
import { TCardState } from '../types';
import { CustomError } from '../components/Error';

export const FormCreateCard = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>();

  const onSubmit = (data: IFormValues) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className="form-wrapper">
        <h1>Create Card</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <div className="form-group">
              <TextInput
                label="Your Name"
                register={register}
                required
              />
              {errors["Your Name"] && <CustomError message="Name is required!" />}
            </div>

            <div className="form-group">
              <InputDate
                label="Day Of Birth"
                register={register}
                required
              />
              {errors["Day Of Birth"] && <CustomError message="Name is required!" />}
            </div>

          </div>
          <button type="submit" value="Submit">
            Create Card
            </button>
        </form>
      </div>

      <div className="container">
        {/* {this.state.cards.map((card) => (
          <Card {...card} key={card.id} />
        ))} */}
      </div>
    </>
  );
}
