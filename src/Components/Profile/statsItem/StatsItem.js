import React from 'react-dom';
import PropTypes from 'prop-types';
import styles from '../Profile.module.css';

const StatsItem = ({ el: [key, value] }) => {
  return (
    <li>
      <span className={styles.label}>{key}</span>
      <span className={styles.quantity}>{value}</span>
    </li>
  );
};

StatsItem.propTypes = {
  el: PropTypes.array.isRequired,
};

export default StatsItem;