import React, { useEffect, useRef, useState } from 'react';

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
  }, []);

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function changeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setInputSearchValue(e.target.value);
  }

  function searchHandler(e: React.MouseEvent<HTMLButtonElement>): void {
    // async function fetchData() {
    //   try {
    //     setError('');
    //     setIsLoading(true);
    //     const res = await fetch('https://dummyjson.com/products?limit=10');
    //     const data = await res.json();
    //     setProducts(data.products);
    //     setIsLoading(false);
    //   } catch (e: unknown) {
    //     setIsLoading(false);
    //     const error = e as Error;
    //     setError(error.message)

    //   } 
    // }
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
          <button
            onClick={searchHandler}
            className="search-btn" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
