import * as actionTypes from '../actions/actionTypes';
import transform from '../../hoc/transformObject';
import returnData from '../../hoc/returnData';
import reducerCopyPrevState from '../../hoc/reducerCopyPrevState';

const initialState = {
  dataSection: {
    totalCases: 0,
    totalDeaths: 0,
    totalRecovered: 0,
    activeCases: 0,
    criticalCases: 0,
  },
  chartSection: {
    labels: [],
    datasets: {
      casesDtSet: {
        label: 'Total Cases',
        borderColor: 'blue',
        borderWidth: 2,
        data: [],
      },
      deathsDtSet: {
        label: 'Total Deaths',
        borderColor: 'red',
        borderWidth: 2,
        data: [],
      },
      recoveredDtSet: {
        label: 'Total Recovered',
        borderColor: 'yellow',
        borderWidth: 2,
        data: [],
      },
    },
  },
  loading: true,
  country: 'World',
};

const reducerDataSection = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_GET_WORLD_DATA:
      return { ...state, loading: true };

    case actionTypes.SUCCES_GET_WORLD_DATA:
      const initialLabels = transform(action.chartSection.data.cases, 7);
      return reducerCopyPrevState(state, {
        dataSection: reducerCopyPrevState(state.dataSection, {
          totalCases: action.dataSection.data.cases,
          totalDeaths: action.dataSection.data.deaths,
          totalRecovered: action.dataSection.data.recovered,
          activeCases: action.dataSection.data.active,
          criticalCases: action.dataSection.data.critical,
        }),
        chartSection: reducerCopyPrevState(state.chartSection, {
          labels: initialLabels,
          datasets: reducerCopyPrevState(state.chartSection.datasets, {
            casesDtSet: reducerCopyPrevState(
              state.chartSection.datasets.casesDtSet,
              {
                data: returnData(initialLabels, action.chartSection.data.cases),
              }
            ),
            deathsDtSet: reducerCopyPrevState(
              state.chartSection.datasets.deathsDtSet,
              {
                data: returnData(
                  initialLabels,
                  action.chartSection.data.deaths
                ),
              }
            ),
            recoveredDtSet: reducerCopyPrevState(
              state.chartSection.datasets.recoveredDtSet,
              {
                data: returnData(
                  initialLabels,
                  action.chartSection.data.recovered
                ),
              }
            ),
          }),
        }),
        loading: false,
        country: 'World',
      });

    case actionTypes.ERROR_GET_WORLD_DATA:
      return { ...state, loading: false };

    case actionTypes.START_SEARCH_COUNTRY_DATA:
      return { ...state, loading: true };

    case actionTypes.SUCCES_SEARCH_COUNTRY_DATA:
      return reducerCopyPrevState(state, {
        loading: false,
        country: action.dataSection.data.country,
        dataSection: reducerCopyPrevState(state.dataSection, {
          totalCases: action.dataSection.data.cases,
          totalDeaths: action.dataSection.data.deaths,
          totalRecovered: action.dataSection.data.recovered,
          activeCases: action.dataSection.data.active,
          criticalCases: action.dataSection.data.critical,
        }),
        chartSection: reducerCopyPrevState(state.chartSection, {
          datasets: reducerCopyPrevState(state.chartSection.datasets, {
            casesDtSet: reducerCopyPrevState(
              state.chartSection.datasets.casesDtSet,
              {
                data: returnData(
                  state.chartSection.labels,
                  action.chartSection.data.timeline.cases
                ),
              }
            ),
            recoveredDtSet: reducerCopyPrevState(
              state.chartSection.datasets.recoveredDtSet,
              {
                data: returnData(
                  state.chartSection.labels,
                  action.chartSection.data.timeline.recovered
                ),
              }
            ),
            deathsDtSet: reducerCopyPrevState(
              state.chartSection.datasets.deathsDtSet,
              {
                data: returnData(
                  state.chartSection.labels,
                  action.chartSection.data.timeline.deaths
                ),
              }
            ),
          }),
        }),
      });

    case actionTypes.ERROR_SEARCH_COUNTRY_DATA:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default reducerDataSection;
