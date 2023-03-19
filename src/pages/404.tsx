import React from 'react';
import { Link } from 'react-router-dom';


export function Page404() {
  return (
    <div>
      <h1>Not found page</h1>
      <Link to="/">Go Home</Link>
    </div>
  )
}