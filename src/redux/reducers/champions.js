import { UPDATE_FILTER } from '../actions/types';

const initalState = {
  champions: {},
  filterInput: ''
};

export default function(state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_FILTER:
      return { ...state, filterInput: payload.toUpperCase() };
    default:
      return state;
  }
}
