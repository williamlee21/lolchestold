import {
  FETCH_PROFILE_DATA,
  FETCH_CURRENT_DATA,
  ADD_PROFILE,
  SELECT_PROFILE,
  TOGGLE_CHAMPION,
  RESET_PROFILE,
  REMOVE_PROFILE
} from '../actions/types';

const initialState = {
  profiles: [],
  current: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  // I was using const updatedProfile but b/c i cannot manipulate this in other switch block and cannot come up with a better naming
  // Any suggestions is appericated
  let updatedProfiles: [];

  switch (type) {
    case FETCH_PROFILE_DATA:
      return { ...state, profiles: payload };
    case FETCH_CURRENT_DATA:
      return { ...state, current: payload };
    case ADD_PROFILE:
      localStorage.setItem(
        'profiles',
        JSON.stringify([...state.profiles, payload])
      );

      localStorage.setItem('current', JSON.stringify(payload));

      return {
        ...state,
        profiles: [...state.profiles, payload],
        current: payload
      };
    case SELECT_PROFILE:
      localStorage.setItem('current', JSON.stringify(payload));

      return { ...state, current: payload };
    case TOGGLE_CHAMPION:
      const updatedChampion = {
        [payload]: {
          ...state.current.champions[payload],
          chestAvaliable:
            state.current.champions[payload].chestAvaliable !== undefined
              ? !state.current.champions[payload].chestAvaliable
              : false
        }
      };

      const updatedProfile = {
        ...state.current,
        champions: { ...state.current.champions, ...updatedChampion }
      };

      updatedProfiles = state.profiles.map(profile => {
        if (profile.id === updatedProfile.id) {
          return updatedProfile;
        } else {
          return profile;
        }
      });

      localStorage.setItem('profiles', JSON.stringify(updatedProfiles));

      localStorage.setItem('current', JSON.stringify(updatedProfile));

      return { ...state, current: updatedProfile, profiles: updatedProfiles };
    case RESET_PROFILE:
      updatedProfiles = state.profiles.map(profile => {
        if (profile.id === payload.id) {
          return payload;
        } else {
          return profile;
        }
      });

      localStorage.setItem('profiles', JSON.stringify(updatedProfiles));

      localStorage.setItem('current', JSON.stringify(payload));

      return { ...state, current: payload, profiles: updatedProfiles };
    case REMOVE_PROFILE:
      updatedProfiles = state.profiles.filter(
        profile => profile.id !== payload
      );

      const current = updatedProfiles[0] ? { ...updatedProfiles[0] } : {};

      localStorage.setItem('profiles', JSON.stringify(updatedProfiles));

      localStorage.setItem('current', JSON.stringify(current));

      return { ...state, current, profiles: updatedProfiles };
    default:
      return state;
  }
}
