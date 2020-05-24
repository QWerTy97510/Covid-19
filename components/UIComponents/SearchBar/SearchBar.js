import React, { useState } from 'react';
import classes from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import * as action from '../../../store/actions/index';

const iconSearch = <FontAwesomeIcon icon={faSearch} />;

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (inputValue === '' || inputValue.toLowerCase() === 'world') {
      dispatch(action.getWorldData());
    } else {
      dispatch(action.getSearchedCountryData(inputValue));
    }
    setInputValue('');
  };

  return (
    <form className={classes.SearchBar} onSubmit={submitFormHandler}>
      <input
        type='text'
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        className={classes.InputSearchBar}
        placeholder='Search country'
      />
      <button type='submit' className={classes.ButtonSearchBar}>
        {iconSearch}
      </button>
    </form>
  );
};

export default SearchBar;
