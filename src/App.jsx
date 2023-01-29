import profileData from './user.json';

import Profile from './components/Profile';
//import data from './data.json';
import Statistics from './components/Statistics';
//import friends from './friends.json';
import  FriendList  from './components/FriendList';
const App = () => {
 //console.log({data});
  //console.log(profileData.username);
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
      <Statistics title="Upload stats"/>
      <FriendList />;
    </>
    //<Statistics title="Upload stats" stats={data} />

     // <Statistics stats={data} />
    //<FriendList friends={friends} />;
      );
};
export default App;