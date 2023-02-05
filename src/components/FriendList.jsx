import PropTypes from 'prop-types';
import { StatusFriend } from './FriendList.styled';
import { ItemFriend } from './FriendList.styled';
import { TextFriend } from './FriendList.styled';
import { ImgFriend } from './FriendList.styled';

export const FriendList = ({ friendList: { avatar, name, isOnline  } }) =>
{
    return (  
            <ItemFriend>
            <StatusFriend value={isOnline}>{isOnline}</StatusFriend>
            <ImgFriend src={avatar} alt="User avatar" width="48" />
            <TextFriend>{name}</TextFriend>
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