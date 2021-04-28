  
import React from 'react';
import Profile from './Components/Profile/Profile';
import user from './data/user.json';
import Statistics from './Components/Statistics/Statistics';
import statistics from './data/statistical-data.json';
import FriendList from './Components/FriendList/FriendList';
import friends from './data/friends.json';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <>
      <Profile {...user}/>
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;