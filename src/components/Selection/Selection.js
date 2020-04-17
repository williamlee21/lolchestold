import React from 'react';
import PropTypes from 'prop-types';
import ChampionCard from '../ChampionCard/ChampionCard';
import './selection.css';

const Selection = ({ data: { title, champions } }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className='selection'>
        {champions &&
          Object.values(champions).map(champData => (
            <div key={champData.id}>
              <ChampionCard champData={champData} />
            </div>
          ))}
      </div>
    </>
  );
};

Selection.propTypes = {
  data: PropTypes.object
};

export default Selection;
