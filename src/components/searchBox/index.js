import React from 'react'
import PropTypes from 'prop-types';

export default class SearchBox extends React.PureComponent {
  render () {
    const { search } = this.props;
    return (
      <div className="row">
        <input type="text" className="searchBox" placeholder="Search books" onChange={e => search(e.target.value)} />
      </div>
    );
  }
}

SearchBox.propTypes = {
  search: PropTypes.func.isRequired
};