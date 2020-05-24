import * as actionTypes from '../actions/actionTypes';

const initialState = {
  data: [],
  loading: true,
  currentSortType: 'cases',
};

const reducerTableSection = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_GET_TABLE_SECTION_DATA:
      return { ...state, loading: true };

    case actionTypes.SUCCES_GET_TABLE_SECTION_DATA:
      return {
        ...state,
        loading: false,
        data: action.dataTS,
        currentSortType: action.currSortType,
      };

    case actionTypes.ERROR_GET_TABLE_SECTION_DATA:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducerTableSection;
