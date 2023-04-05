import { Path, UseFormRegister } from 'react-hook-form';

export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export interface IFormValues {
  'Your Name': string;
  'Day Of Birth': string;
  'agreement': boolean;
  'Country': string;
  'Gender': string;
  'File': string;
}

export type TCardState = {
  cards: TCard[];
};

export type TCard = {
  id: string;
  name: string;
  date: string;
  country: string;
  gender: string;
  image: string;
};

export type TInputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};
