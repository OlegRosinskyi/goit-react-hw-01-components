import profileData from './user.json';
import Profile from './components/Profile';
import data from './data.json';
import Statistics from './components/Statistics';
import friends from './friends.json';
import{FriendList} from './components/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './components/Transactions';

import { Container}  from 'App.styled';
import { StatList } from 'App.styled';
import { StatisticsAll } from 'App.styled';
import { TransactionHistoryTable } from 'components/Transactions.styled';
import { StatisticsTitle } from 'App.styled';
import { ThTabletHead } from 'App.styled';
import { FriendListUl } from 'App.styled';
const App = () => {
 console.log({friends})
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
        <StatisticsTitle  >Upload stats</StatisticsTitle >
        <StatList>
          {data.map(item=> <Statistics key={item.id} stats={item} />)}
        </StatList>
        </StatisticsAll>
       <section className="friends">
      <FriendListUl>
        {friends.map(friend => <FriendList key={friend.id} friendList={friend} />)}
      </FriendListUl>
      </section> 
      <TransactionHistoryTable>
        
      <thead>
      <tr>
        <ThTabletHead>Type</ThTabletHead>
        <ThTabletHead>Amount</ThTabletHead>
        <ThTabletHead>Currency</ThTabletHead>
      </tr>
      </thead>
        <tbody>
          {transactions.map(transaction => <TransactionHistory key={transaction.id} transactionString={transaction} />)}
        </tbody>
        </TransactionHistoryTable>
         </Container>
      );
};
export default App;