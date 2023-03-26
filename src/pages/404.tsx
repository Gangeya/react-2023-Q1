import React from 'react';
import { Link } from 'react-router-dom';

export class Page404 extends React.Component {
  render() {
    return (
      <div>
        <h1>Not found page</h1>
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}
