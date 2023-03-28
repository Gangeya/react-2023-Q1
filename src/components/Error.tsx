import React from 'react';

type TErrorMessage = {
  message: string;
};

export class CustomError extends React.Component<TErrorMessage> {
  render() {
    return <p className="error">{this.props.message}</p>;
  }
}
