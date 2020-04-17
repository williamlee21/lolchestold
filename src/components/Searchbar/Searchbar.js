import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './searchbar.css';
import { connect } from 'react-redux';
import { updateFilter } from '../../redux/actions/champions';

const Searchbar = ({ updateFilter, filterInput }) => {
  useEffect(() => {
    updateFilter(filterInput);
  }, [updateFilter, filterInput]);

  return (
    <div className='searchbar'>
      <input
        type='text'
        value={filterInput}
        onChange={e => updateFilter(e.target.value)}
        placeholder='SEARCH CHAMPION E.G. ZYRA'
      />
    </div>
  );
};

Searchbar.propTypes = {
  updateFilter: PropTypes.func.isRequired,
  filterInput: PropTypes.string
};

const mapStateToProps = state => ({ filterInput: state.champions.filterInput });

export default connect(mapStateToProps, { updateFilter })(Searchbar);
