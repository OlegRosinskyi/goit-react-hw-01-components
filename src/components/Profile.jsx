import PropTypes from 'prop-types';
import { ProfileUser } from './Profile.styled';
import { Description } from './Profile.styled';
import { Stats } from './Profile.styled';
import { StatsSingl } from './Profile.styled';
import { ProfileImg } from './Profile.styled';
const Profile = ({ urlUser, tagUser, nameUser, locationUser, followersStatsUser, viewsStatsUser, likesStatsUser }) => {
    
    return (
    <ProfileUser>
  <Description>
    <ProfileImg
      src={urlUser}
      alt={tagUser}
      className="avatar"
    />
    <p className="name">{nameUser}</p>
    <p className="tag">{tagUser}</p>
    <p className="location">{locationUser}</p>
  </Description>

  <Stats>
    <StatsSingl>
      <span className="label">Followers</span>
      <span className="quantity">{followersStatsUser}</span>
    </StatsSingl>
    <StatsSingl>
      <span className="label">Views</span>
      <span className="quantity">{viewsStatsUser}</span>
    </StatsSingl>
    <StatsSingl>
      <span className="label">Likes</span>
      <span className="quantity">{likesStatsUser}</span>
    </StatsSingl>
  </Stats>
    </ProfileUser >)
} 
export default Profile;
Profile.propTypes = {
    urlUser: PropTypes.string.isRequired,
    tagUser: PropTypes.string.isRequired,
    nameUser: PropTypes.string.isRequired,
    locationUser: PropTypes.string.isRequired,
    followersStatsUser: PropTypes.number.isRequired,
    viewsStatsUser: PropTypes.number.isRequired,  
    likesStatsUser: PropTypes.number.isRequired,  
}