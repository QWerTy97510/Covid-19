import React, { useEffect, useState } from 'react';
import classes from './TableSection.module.css';
import TableHead from '../../components/TableSectionComponents/TableHead/TableHead';
import TableBody from '../../components/TableSectionComponents/TableBody/TableBody';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../store/actions/index';

const TableSection = () => {
  const [numOfCountries, setNumOfCOuntries] = useState(20);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.fetchingTSData());
  }, [dispatch]);

  const data = useSelector((state) => state.tableSection.data.data);
  const loading = useSelector((state) => state.tableSection.loading);

  const countryClickedHandler = (country) => {
    dispatch(action.getSearchedCountryData(country));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const changeSortTypeHandler = (sortType) => {
    dispatch(action.fetchingTSData(sortType));
  };

  let dataArray;
  let disableButton = true;
  if (!loading) {
    dataArray = data.slice(0, numOfCountries);
    if (numOfCountries > data.length) {
      disableButton = false;
    }
  }

  const addMoreCountriesHandler = () => {
    setNumOfCOuntries(numOfCountries + 20);
  };

  return (
    <div className={classes.TableSection}>
      <table className={classes.TableSectionTable}>
        <TableHead clicked={changeSortTypeHandler} />
        <TableBody
          data={dataArray}
          loading={loading}
          clicked={countryClickedHandler}
        />
      </table>
      <button
        style={{ display: disableButton ? 'inline' : 'none' }}
        onClick={addMoreCountriesHandler}
        className={classes.ShowMoreButton}>
        Show more
      </button>
    </div>
  );
};

export default TableSection;
