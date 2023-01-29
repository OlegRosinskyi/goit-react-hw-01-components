import profileData from './user.json';

import Profile from './components/Profile';
import data from './data.json';
import Statistics from './components/Statistics';
import friends from './friends.json';
import FriendList from './components/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './components/Transactions';

const App = () => {
 
  return (
    <>
      <Profile
      urlUser={profileData.avatar}
      tagUser={profileData.tag}
      nameUser={profileData.username}
      locationUser={profileData.location}
      followersStatsUser={profileData.stats.followers}
      viewsStatsUser={profileData.stats.views}
      likesStatsUser={profileData.stats.likes}
      />
     
       <section class="statistics">
        <h2 class="title">Upload stats</h2>
        <ul class="stat-list">
          {data.map(item=> <Statistics key={item.id} stats={item} />)}
        </ul>
        </section>
        
      <ul class="friend-list">
        {friends.map(friend=><FriendList key={friend.id} friends={friend} />)}
      </ul>
      
      <table class="transaction-history">
        
      <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
      </thead>
        <tbody>
          {transactions.map(transaction=><TransactionHistory key={transaction.id} transactionString={transaction} />)}
        </tbody>
</table>
         
    </>
    
   
    
      );
};
export default App;