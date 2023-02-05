import profileData from './user.json';
import Profile from './components/Profile';
import data from './data.json';
import Statistics from './components/Statistics';
import friends from './friends.json';
import{FriendList} from './components/FriendList';
import transactions from './transactions.json';
import TransactionHistory from 'components/Transactions';

import { Container}  from 'App.styled';
import { StatList } from 'App.styled';
import { StatisticsAll } from 'App.styled';
import { TransactionHistoryTable } from 'App.styled';
import { StatisticsTitle } from 'App.styled';
import { ThTabletHead } from 'App.styled';
import { FriendListUl } from 'App.styled';
const App = () => {
 //console.log({friends})
  
  return (
    <Container>
     <Profile
      urlUser={profileData.avatar}
      tagUser={profileData.tag}
      nameUser={profileData.username}
      locationUser={profileData.location}
      followersStatsUser={profileData.stats.followers}
      viewsStatsUser={profileData.stats.views}
      likesStatsUser={profileData.stats.likes}
      
      
      />
            <StatisticsAll>
        <StatisticsTitle >Upload stats</StatisticsTitle >
        <StatList>
          {data.map(item=> <Statistics key={item.id} stats={item} />)}
        </StatList>
      </StatisticsAll>
      


      <section className="friends">
       <FriendListUl>
        {friends.map(friend => <FriendList key={friend.id} friendList={friend} />)}
      </FriendListUl>
      </section> 
      <div className='border-radius: 5px;'>
      <TransactionHistoryTable>
        
      <thead>
      <tr>
        <ThTabletHead>Type</ThTabletHead>
        <ThTabletHead>Amount</ThTabletHead>
        <ThTabletHead>Currency</ThTabletHead>
      </tr>
      </thead>
        <tbody>
          {transactions.map((transaction, i) => <TransactionHistory key={transaction.id} index={Math.ceil(i/2)-i/2} transactionString={transaction} />)}
        </tbody>
      </TransactionHistoryTable>
      </div>
         </Container>
      );
};
export default App;
console.log(TransactionHistoryTable)