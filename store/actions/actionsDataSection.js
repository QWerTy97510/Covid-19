import axios from 'axios';
import * as actionTypes from './actionTypes';

// FETCHING WORLD DATA
const startFetchWorldData = () => {
  return {
    type: actionTypes.START_GET_WORLD_DATA,
  };
};

const succesFetchWorldData = (dataSection, chartSection) => {
  return {
    type: actionTypes.SUCCES_GET_WORLD_DATA,
    dataSection: dataSection,
    chartSection: chartSection,
  };
};

const errorFetchWorldData = (err) => {
  return {
    type: actionTypes.ERROR_GET_WORLD_DATA,
    error: err,
  };
};

export const getWorldData = () => {
  return (dispatch) => {
    dispatch(startFetchWorldData());
    const dataSectionAxiosGet = axios.get('https://corona.lmao.ninja/v2/all');
    const chartSectionAxiosGet = axios.get(
      'https://corona.lmao.ninja/v2/historical/all'
    );
    axios
      .all([dataSectionAxiosGet, chartSectionAxiosGet])
      .then(
        axios.spread((...response) => {
          const dataSectionResponse = response[0];
          const chartSectionResponse = response[1];
          dispatch(
            succesFetchWorldData(dataSectionResponse, chartSectionResponse)
          );
        })
      )
      .catch((error) => dispatch(errorFetchWorldData(error)));
  };
};

// SEARCHING COUNTRY DATA
const startSearchingCountryData = () => {
  return {
    type: actionTypes.START_SEARCH_COUNTRY_DATA,
  };
};

const succesSearchingCountryData = (dataSection, chartSection) => {
  return {
    type: actionTypes.SUCCES_SEARCH_COUNTRY_DATA,
    dataSection: dataSection,
    chartSection: chartSection,
  };
};

const errorSearchingCountryData = (err) => {
  return {
    type: actionTypes.ERROR_SEARCH_COUNTRY_DATA,
    error: err,
  };
};

export const getSearchedCountryData = (countryName) => {
  return (dispatch) => {
    dispatch(startSearchingCountryData());
    const dataSectionAxiosGetSearched = axios.get(
      `https://corona.lmao.ninja/v2/countries/${countryName}`
    );
    const chartSectionAxiosGetSearched = axios.get(
      `https://corona.lmao.ninja/v2/historical/${countryName}`
    );

    axios
      .all([dataSectionAxiosGetSearched, chartSectionAxiosGetSearched])
      .then(
        axios.spread((...response) => {
          const responseSearchedDataSection = response[0];
          const responseSearchedChartSection = response[1];
          dispatch(
            succesSearchingCountryData(
              responseSearchedDataSection,
              responseSearchedChartSection
            )
          );
        })
      )
      .catch((error) => dispatch(errorSearchingCountryData(error)));
  };
};
