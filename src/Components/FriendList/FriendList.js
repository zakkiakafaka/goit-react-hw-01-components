import React from 'react';
import FriendListItem from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  const items = friends.map(props => (
    <FriendListItem key={props.id} {...props} />
  ));
  return <ul className={styles.friendList}>{items}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default FriendList;