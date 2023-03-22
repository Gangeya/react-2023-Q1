import React from 'react';

interface ISearchState {
  inputSearchValue: string;
}

export class Search extends React.Component<Record<string, never>, ISearchState> {
  constructor(props: never) {
    super(props);
    this.state = {
      inputSearchValue: localStorage.getItem('key-inputSearchValue') || '',
    };
  }

  handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  componentDidMount() {
    localStorage.setItem('key-inputSearchValue', this.state.inputSearchValue);
  }

  componentWillUnmount() {
    localStorage.setItem('key-inputSearchValue', this.state.inputSearchValue);
  }

  changeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputSearchValue: e.target.value,
    });
    console.log(this.state.inputSearchValue);
  }

  render() {
    return (
      <div className="search">
        <form className="search-form" onSubmit={(e) => this.handleSearch(e)}>
          <div className="search-wrap">
            <input
              className="search-input"
              type="search"
              placeholder="Search..."
              name="search"
              value={this.state.inputSearchValue}
              id="search"
              onChange={(e) => this.changeSearch(e)}
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}
