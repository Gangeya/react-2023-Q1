import React from 'react';

interface ISearch { };
interface ISearchState { };

export class Search extends React.Component<ISearch, ISearchState> {
  constructor(props: ISearch) {
    super(props);
  }
  render() {
    return (
      <div className="search">
        <form className="search-form">
          <div className="search-wrap">
            <input className="search-input" type="search" name="search" id="search" />
            <button className="search-btn" type="submit">Search</button>
          </div>
        </form>
      </div>
    )
  }
}