
const Profile = ({ urlUser, tagUser, nameUser, locationUser, followersStatsUser, viewsStatsUser, likesStatsUser }) => {
    
    return (
    <div class="profile">
  <div class="description">
    <img
      src={urlUser}
      alt={tagUser}
      class="avatar"
    />
    <p class="name">{nameUser}</p>
    <p class="tag">{tagUser}</p>
    <p class="location">{locationUser}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{followersStatsUser}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{viewsStatsUser}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{likesStatsUser}</span>
    </li>
  </ul>
    </div >)
} 
export default Profile;