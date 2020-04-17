import { UPDATE_FILTER } from './types';

export const updateFilter = textInput => async dispatch => {
  try {
    dispatch({
      type: UPDATE_FILTER,
      payload: textInput
    });
  } catch (err) {
    console.log('Opps. Something went wrong.');
  }
};
