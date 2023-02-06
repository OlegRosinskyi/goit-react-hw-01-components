import PropTypes from 'prop-types';
import { ProfileUser } from './Profile.styled';
import { Description } from './Profile.styled';
import { Stats } from './Profile.styled';
import { StatsSingl } from './Profile.styled';
import { ProfileImg } from './Profile.styled';
import { ProfileName } from './Profile.styled';
import { ProfileTeg } from './Profile.styled';
import { StatsQuantity } from './Profile.styled';
const Profile = ({ avatar, tag, user, location, stats }) => {
    
    return (
    <ProfileUser>
  <Description>
    <ProfileImg
      src={avatar}
      alt={tag}
      width={300}      
    />
    <ProfileName>{user}</ProfileName>
    <ProfileTeg>{tag}</ProfileTeg>
    <ProfileTeg>{location}</ProfileTeg>
  </Description>

  <Stats>
    <StatsSingl>
      <span className="label">Followers</span>
      <StatsQuantity>{stats.followers}</StatsQuantity>
    </StatsSingl>
    <StatsSingl>
      <span className="label">Views</span>
      <StatsQuantity>{stats.views}</StatsQuantity>
    </StatsSingl>
    <StatsSingl>
      <span className="label">Likes</span>
      <StatsQuantity>{stats.likes}</StatsQuantity>
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