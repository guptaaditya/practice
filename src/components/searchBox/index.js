import React from 'react'
import PropTypes from 'prop-types';

export default function SearchBox({ search }) {
  return (
    <div className="row">
      <input type="text" style={{padding: '0 5px', width: '30%'}} placeholder="Search books" onChange={e => search(e.target.value)} />
    </div>
  );
}

SearchBox.propTypes = {
  search: PropTypes.func.isRequired
};