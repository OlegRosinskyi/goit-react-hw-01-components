import PropTypes from 'prop-types';
import { StatusFriend } from './FriendList.styled';
import { FriendItem } from './FriendList.styled';
import { FriendText } from './FriendList.styled';
import { FriendImg } from './FriendList.styled';
import { FriendListAll } from './FriendList.styled';

export const FriendList = ({friends}) =>
{
  return (  
    <FriendListAll>
      {friends.map(friend => <FriendItem key={friend.id}>
            <StatusFriend value={friend.isOnline}>{friend.isOnline}</StatusFriend>
            <FriendImg src={friend.avatar} alt="User avatar" width="48" />
            <FriendText>{friend.name}</FriendText>
    </FriendItem>)}
    </FriendListAll>
  )
}
export default FriendList;
FriendList.propTypes = {
      friends:PropTypes.array.isRequired,
}