import React, { useEffect, useRef, useState } from 'react';

interface ISearchState {
  inputSearchValue: string;
}

export const Search = () => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const refSearch = useRef(inputSearchValue);

  useEffect(() => {
    refSearch.current = inputSearchValue;
  }, [inputSearchValue]);

  useEffect(() => {
    const key = localStorage.getItem('key-inputSearchValue');
    if (key) {
      setInputSearchValue(key);
    }
    return () => {
      localStorage.setItem('key-inputSearchValue', refSearch.current);
    };
  }, [])


  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function changeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setInputSearchValue(e.target.value);
  }


  return (
    <div className="search">
      <form className="search-form" onSubmit={(e) => handleSearch(e)}>
        <div className="search-wrap">
          <input
            className="search-input"
            type="search"
            placeholder="Search..."
            name="search"
            value={inputSearchValue}
            id="search"
            onChange={(e) => changeSearch(e)}
          />
          <button className="search-btn" type="submit">
            Search
            </button>
        </div>
      </form>
    </div>
  )
}
