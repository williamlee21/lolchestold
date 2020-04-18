import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './menu.css';
import { connect } from 'react-redux';
import { addProfile, selectProfile } from '../../redux/actions/profiles';

const Menu = ({
  profiles: { profiles, current },
  addProfile,
  selectProfile,
}) => {
  const [profileTitle, setProfileTitle] = useState('');

  const handleSubmit = () => {
    addProfile(profileTitle);
    setProfileTitle('');
  };

  return (
    <div className='menu'>
      <div>
        <h1>PROFILES</h1>
        <br />
        <hr />
        <br />
        <div className='form-group'>
          <input
            type='text'
            maxLength={16}
            value={profileTitle}
            placeholder='CREATE A PROFILE'
            onChange={(e) => setProfileTitle(e.target.value)}
          />
          <button
            className='btn add-btn success'
            disabled={profileTitle.length < 1}
            onClick={handleSubmit}
          >
            +
          </button>
        </div>
        <br />
        <hr />
        <br />
        <ul>
          {profiles &&
            profiles.map((profile) => (
              <li
                key={profile.id}
                className={current.id === profile.id ? 'active' : ''}
                onClick={() => selectProfile(profile)}
              >
                {profile.title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

Menu.propTypes = {
  addProfile: PropTypes.func.isRequired,
  profiles: PropTypes.object,
};

export default connect(null, { addProfile, selectProfile })(Menu);
