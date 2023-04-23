import React, { useRef, useState } from 'react';

import { useCards } from '../components/useCards';
import { TProduct } from 'types';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { TAppDispatch } from '../store';
import { searchText } from '../store/searchSlice';

interface ISearchProps {
  setCards: (arr: TProduct[]) => void;
}
export const Search = ({ setCards }: ISearchProps) => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const refSearch = useRef(inputSearchValue);
  const { setError, setIsLoading } = useCards();

  const searchVal = useAppSelector((state) => state.search.searchValue);
  const dispatch: TAppDispatch = useAppDispatch();
  refSearch.current = searchVal;

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function changeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setInputSearchValue(e.target.value);
    dispatch(searchText(e.target.value));
  }

  async function searchHandler() {
    try {
      setError('');
      setIsLoading(true);
      const res = await fetch(`https://dummyjson.com/products/search?q=${inputSearchValue}`);
      const data = await res.json();
      setCards(data.products);
      setIsLoading(false);
    } catch (e: unknown) {
      setIsLoading(false);
      const error = e as Error;
      setError(error.message);
    }
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
            value={searchVal}
            id="search"
            onChange={(e) => changeSearch(e)}
          />
          <button onClick={searchHandler} className="search-btn" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
