import React from 'react';
import { NavLink } from 'react-router-dom';

export class Page404 extends React.Component {
  render() {
    return (
      <div>
        <h1>Not found page</h1>
        <NavLink to="/">Go Home</NavLink>
      </div>
    );
  }
}
