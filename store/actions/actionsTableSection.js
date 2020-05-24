import * as actionTypes from './actionTypes';
import axios from 'axios';

const startGetTSData = () => {
  return {
    type: actionTypes.START_GET_TABLE_SECTION_DATA,
  };
};

const succesGetTSData = (dataTS, currSortType) => {
  return {
    type: actionTypes.SUCCES_GET_TABLE_SECTION_DATA,
    dataTS: dataTS,
    currSortType: currSortType,
  };
};

const errorGetTSData = (err) => {
  return {
    type: actionTypes.ERROR_GET_TABLE_SECTION_DATA,
    error: err,
  };
};

export const fetchingTSData = (sortType = 'cases') => {
  return (dispatch) => {
    dispatch(startGetTSData());
    axios
      .get(`https://corona.lmao.ninja/v2/countries?sort=${sortType}`)
      .then((responseTSData) =>
        dispatch(succesGetTSData(responseTSData, sortType))
      )
      .catch((error) => dispatch(errorGetTSData(error)));
  };
};
