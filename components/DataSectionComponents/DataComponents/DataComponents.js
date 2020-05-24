import React, { useEffect } from 'react';
import classes from './DataComponents.module.css';
import DataComponent from './DataComponent/DataComponent';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../../store/actions/index';

const DataComponents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.getWorldData());
  }, [dispatch]);

  const worldData = useSelector((state) => state.dataSection.dataSection);
  const loading = useSelector((state) => state.dataSection.loading);
  const country = useSelector((state) => state.dataSection.country);

  let paragraphs;
  if (!loading) {
    paragraphs = [
      ['Total Cases:', worldData.totalCases],
      ['Total Deaths:', worldData.totalDeaths],
      ['Recovered:', worldData.totalRecovered],
      ['Active Cases:', worldData.activeCases],
      ['Critical:', worldData.criticalCases],
    ];
  }

  return (
    <div className={classes.DataComponents}>
      <h1>{country}</h1>
      {loading ? (
        <h1>Please wait...</h1>
      ) : (
        paragraphs.map((paragraph) => (
          <DataComponent
            key={paragraph[0]}
            leftParagraph={paragraph[0]}
            rightParagraph={paragraph[1]}
          />
        ))
      )}
    </div>
  );
};

export default DataComponents;
