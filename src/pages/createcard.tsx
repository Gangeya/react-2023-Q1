import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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
import { CustomError } from '../components/Error';

export const FormCreateCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();

  const [cards, setCars] = useState<TCard[]>([]);

  const onSubmit = (data: IFormValues) => {
    const card: TCard = {
      id: uuid(),
      name: data['Your Name'],
      country: data.Country,
      date: data['Day Of Birth'],
      gender: data.Gender,
      agreement: data.agreement,
      image: URL.createObjectURL(data.File[0]),
    };

    setCars((cards) => [...cards, { ...card }]);
    reset();
  };

  return (
    <>
      <div className="form-wrapper">
        <h1>Create Card</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <div className="form-group">
              <TextInput label="Your Name" register={register} required />
              {errors['Your Name'] && <CustomError message={errors['Your Name'].message} />}
            </div>

            <div className="form-group">
              <InputDate label="Day Of Birth" register={register} required />
              {errors['Day Of Birth'] && <CustomError message="Day of Birth is required" />}
            </div>

            <div className="form-group">
              <InputCheckBox label="agreement" register={register} required />
              {errors.agreement && <CustomError message="Agreements is required" />}
            </div>

            <div className="form-group">
              <Select label="Country" register={register} required />
              {errors.Country && <CustomError message="Country is required" />}
            </div>

            <div className="form-gro">
              <InputRadio label="Gender" register={register} required />
              {errors.Gender && <CustomError message="Gender is required" />}
            </div>

            <div className="form-group">
              <InputFile label="File" register={register} required />
              {errors.File && <CustomError message={errors.File.message} />}
            </div>
          </div>

          <button type="submit" value="Submit">
            Create Card
          </button>
        </form>
      </div>

      <div className="container">
        {cards.map((card) => (
          <Card {...card} key={card.id} />
        ))}
      </div>
    </>
  );
};
