import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './main.css';
import { connect } from 'react-redux';
import { fetchProfileData } from '../../redux/actions/profiles';
import { fetchCurrentData } from '../../redux/actions/profiles';

import Selection from '../Selection/Selection';
import Searchbar from '../Searchbar/Searchbar';
import ProfileAction from '../ProfileAction/ProfileAction';
import Menu from '../Menu/Menu';

const Main = ({ fetchProfileData, fetchCurrentData, profiles }) => {
  useEffect(() => {
    fetchProfileData();
    fetchCurrentData();
  }, [fetchProfileData, fetchCurrentData]);

  return (
    <div className='main'>
      <Menu profiles={profiles} />
      <div className='content'>
        <Searchbar />
        {!profiles.profiles.length ? (
          <div>NO PROFILE FOUND. CREATE A PROFILE TO GET STARTED!</div>
        ) : (
          ''
        )}
        <Selection data={profiles.current} />
        <ProfileAction />
      </div>
    </div>
  );
};

Main.propTypes = {
  profiles: PropTypes.object.isRequired,
  fetchCurrentData: PropTypes.func.isRequired,
  fetchProfileData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profiles: state.profiles
});

export default connect(mapStateToProps, {
  fetchProfileData,
  fetchCurrentData
})(Main);
