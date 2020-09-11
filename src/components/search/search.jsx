import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './search.scss';

const block = 'search';

const Search = ({ handleChange }) => (
  <div className={block}>
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => _.debounce(handleChange(e.target.value))}
    />
  </div>
);

Search.propTypes = {
  handleChange: PropTypes.func,
};

export default Search;
