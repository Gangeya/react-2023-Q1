import React from 'react';

type TErrorMessage = {
  message: string;
};

export const CustomError = ({ message }: TErrorMessage) => {
  return <p className="error">{message}</p>;
};
