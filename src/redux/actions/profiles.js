import { v4 as uuidv4 } from 'uuid';
import {
  FETCH_PROFILE_DATA,
  FETCH_CURRENT_DATA,
  ADD_PROFILE,
  SELECT_PROFILE,
  TOGGLE_CHAMPION,
  RESET_PROFILE,
  REMOVE_PROFILE
} from './types';

export const fetchProfileData = () => async dispatch => {
  try {
    if (localStorage.getItem('profiles')) {
      const payload = await JSON.parse(localStorage.getItem('profiles'));
      dispatch({ type: FETCH_PROFILE_DATA, payload });
    } else {
      return;
    }
  } catch (err) {
    console.log('Opps. Something went wrong.', err);
  }
};

export const fetchCurrentData = () => async dispatch => {
  try {
    if (localStorage.getItem('current')) {
      const payload = await JSON.parse(localStorage.getItem('current'));
      dispatch({ type: FETCH_CURRENT_DATA, payload });
    } else {
      return;
    }
  } catch (err) {
    console.log('Opps. Something went wrong.', err);
  }
};

export const addProfile = profileTitle => async dispatch => {
  try {
    const res = await fetch(
      'http://ddragon.leagueoflegends.com/cdn/10.7.1/data/en_US/champion.json'
    );
    const data = await res.json();

    const payload = { id: uuidv4(), title: profileTitle, champions: data.data };

    dispatch({ type: ADD_PROFILE, payload });
  } catch (err) {
    console.log('Opps. Something went wrong.', err);
  }
};

export const selectProfile = profile => async dispatch => {
  try {
    dispatch({ type: SELECT_PROFILE, payload: profile });
  } catch (err) {
    console.log('Opps. Something went wrong.', err);
  }
};

export const toggleChampion = championId => async dispatch => {
  try {
    dispatch({ type: TOGGLE_CHAMPION, payload: championId });
  } catch (err) {
    console.log('Opps. Something went wrong.', err);
  }
};

export const resetProfile = () => async dispatch => {
  try {
    const res = await fetch(
      'http://ddragon.leagueoflegends.com/cdn/10.7.1/data/en_US/champion.json'
    );

    const data = await res.json();

    const current = await JSON.parse(localStorage.getItem('current'));
    const payload = { ...current, champions: data.data };

    dispatch({ type: RESET_PROFILE, payload });
  } catch (err) {
    console.log('Opps. Something went wrong.', err);
  }
};

export const removeProfile = () => async dispatch => {
  try {
    const current = await JSON.parse(localStorage.getItem('current'));

    dispatch({ type: REMOVE_PROFILE, payload: current.id });
  } catch (err) {
    console.log('Opps. Something went wrong.', err);
  }
};
