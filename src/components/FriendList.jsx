const FriendList = ({friends:{friendStatus,friendImg,friendName,friendId }}) =>
{
    return (  
        
        <li class="item">
            <span class="status">{friendStatus}</span>
            <img class="avatar" src={friendImg} alt="User avatar" width="48" />
            <p class="name">{friendName}</p>
            </li>
        
       )
}
export default FriendList;