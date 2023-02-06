import user from './user.json';
import Profile from './components/Profile';
import data from './data.json';
import Statistics from 'components/Statistics';
import friends from './friends.json';
import FriendList from './components/FriendList';
import transactions from './transactions.json';
import TransactionHistory from 'components/Transactions';

import { Container}  from 'App.styled';

const App = () => {
 //console.log({friends})
  
  return (
    <Container>
      <Profile
      avatar={user.avatar}
      tag={user.tag}
      user={user.username}
      location={user.location}
      stats={user.stats}    
      />
      <Statistics title={"Upload stats"} stats={data} > 
      </Statistics >
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
      );
};
export default App;
