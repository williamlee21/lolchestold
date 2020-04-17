import React from 'react';
import PropTypes from 'prop-types';
import './championcard.css';
import { connect } from 'react-redux';
import { toggleChampion } from '../../redux/actions/profiles';

const ChampionCard = ({
  champData: { id, name, chestAvaliable },
  toggleChampion,
  filterInput
}) => {
  const isDisabled =
    (id && id.toUpperCase().includes(filterInput)) ||
    name.toUpperCase().includes(filterInput)
      ? ''
      : 'disabled';

  return (
    <div
      className={`champion-card ${isDisabled} ${
        chestAvaliable === false ? 'bg-green' : ''
      }`}
    >
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/10.7.1/img/champion/${id}.png`}
        alt={name}
        className={`${chestAvaliable === false ? 'disabled' : ''}`}
        onClick={() => toggleChampion(id)}
      />
    </div>
  );
};

ChampionCard.propTypes = {
  champData: PropTypes.object.isRequired,
  toggleChampion: PropTypes.func.isRequired,
  filterInput: PropTypes.string
};

const mapStateToProps = state => ({ filterInput: state.champions.filterInput });

export default connect(mapStateToProps, { toggleChampion })(ChampionCard);
