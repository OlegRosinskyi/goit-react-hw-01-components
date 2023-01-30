import PropTypes from 'prop-types';

export const FriendList = ({ friendList: { avatar, name, isOnline  } }) =>
{
    return (  
            <li className="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
            </li>
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