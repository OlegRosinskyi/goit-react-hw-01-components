import PropTypes from 'prop-types';
import { StatisticsSingl } from './Statistics.styled';

const Statistics = ({ stats: { id,label, percentage } }) =>
{
    return (
     
    <StatisticsSingl value={label}>
            <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatisticsSingl>
     )
}
export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired, 
    }).isRequired,
}