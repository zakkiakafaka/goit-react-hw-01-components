import React from 'react';
import StatsItem from './statsItem/StatsItem';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="users` avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

{/* --------------------с Object.entries мне подсказали ------------- */}

      <ul className={styles.stats}>
        {Object.entries(stats).map(el => {
          return <StatsItem key={stats[el[0]]} el={el} />;
        })}
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  name: 'Unknown',
  location: 'Unknown',
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Profile;