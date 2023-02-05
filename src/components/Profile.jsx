import PropTypes from 'prop-types';
import { ProfileUser } from './Profile.styled';
import { Description } from './Profile.styled';
import { Stats } from './Profile.styled';
import { StatsSingl } from './Profile.styled';
import { ProfileImg } from './Profile.styled';
import { ProfileName } from './Profile.styled';
import { ProfileTeg } from './Profile.styled';
import { StatsQuantity } from './Profile.styled';
const Profile = ({ urlUser, tagUser, nameUser, locationUser, followersStatsUser, viewsStatsUser, likesStatsUser }) => {
    
    return (
    <ProfileUser>
  <Description>
    <ProfileImg
      src={urlUser}
      alt={tagUser}
            width={300}
            
    />
    <ProfileName>{nameUser}</ProfileName>
    <ProfileTeg>{tagUser}</ProfileTeg>
    <ProfileTeg>{locationUser}</ProfileTeg>
  </Description>

  <Stats>
    <StatsSingl>
      <span className="label">Followers</span>
      <StatsQuantity>{followersStatsUser}</StatsQuantity>
    </StatsSingl>
    <StatsSingl>
      <span className="label">Views</span>
      <StatsQuantity>{viewsStatsUser}</StatsQuantity>
    </StatsSingl>
    <StatsSingl>
      <span className="label">Likes</span>
      <StatsQuantity>{likesStatsUser}</StatsQuantity>
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