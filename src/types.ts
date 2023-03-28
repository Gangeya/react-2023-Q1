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

export type TCardState = {
  cards: TCard[];
};

export type TCard = {
  id: string;
  name: string;
  date: string;
  country: string;
  gender: string;
  image?: string;
};

export type TTextInputState = {
  isValid: boolean;
  error: string;
};

export type TCheckBoxState = {
  isValid: boolean;
  error: string;
};

export type TDateInputState = {
  isValid: boolean;
  error: string;
};

export type TSelectState = {
  isValid: boolean;
  value: string;
  error: string;
};
