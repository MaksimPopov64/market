import React from 'react';
import PropTypes from 'prop-types';

import './total.scss';

const block = 'total';

const Total = ({ sum }) => (
  <section className={block}>
    <div>Итого:</div>
    <div>{sum}</div>
  </section>
);

Total.propTypes = {
  sum: PropTypes.number,
};

export default Total;
