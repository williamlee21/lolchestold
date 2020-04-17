import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetProfile, removeProfile } from '../../redux/actions/profiles';
import './profileAction.css';

const ProfileAction = ({ resetProfile, removeProfile, current }) => {
  return (
    <>
      {current.id && (
        <div className='profile-action'>
          {/* <input
            type='submit'
            onClick={resetProfile}
            className='warning'
            value='RESET'
          />
          <input
            type='submit'
            onClick={removeProfile}
            className='danger'
            value='DELETE'
          /> */}
          <div className='btn action-btn warning' onClick={resetProfile}>
            RESET
          </div>
          <div className='btn action-btn danger' onClick={removeProfile}>
            DELETE
          </div>
        </div>
      )}
    </>
  );
};

ProfileAction.propTypes = {
  resetProfile: PropTypes.func.isRequired,
  removeProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ current: state.profiles.current });

export default connect(mapStateToProps, { resetProfile, removeProfile })(
  ProfileAction
);
