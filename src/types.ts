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


export type TTextInputState = {
  isValid: boolean;
  error: string;
};

export type TDateInputState = {
  isValid: boolean;
  dateValue: string;
  error: string;
};