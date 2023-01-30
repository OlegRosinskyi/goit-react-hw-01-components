import PropTypes from 'prop-types';
import { StatusFriend } from './FriendList.styled';
import { ItemFriend } from './FriendList.styled';

export const FriendList = ({ friendList: { avatar, name, isOnline  } }) =>
{
    return (  
            <ItemFriend>
            <StatusFriend value={isOnline}>{isOnline}</StatusFriend>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
            </ItemFriend>
       )
}
//export default FriendList;

FriendList.propTypes = {
    friendList: PropTypes.exact({
      id: PropTypes.number.isRequired, 
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    
    }).isRequired,
}