import PropTypes from 'prop-types';
import { StatisticsSingl } from './Statistics.styled';
import {StatisticsBox } from './Statistics.styled';
import { StatisticsList } from './Statistics.styled';
import { StatisticsTitle } from './Statistics.styled';

const Statistics = ({ title, stats}) =>
{
  return (
    <StatisticsBox>
      {title === "Upload stats"&&<StatisticsTitle >{title}</StatisticsTitle >}
        <StatisticsList>
          {stats.map(item=>   <StatisticsSingl key={item.id} value={item.label}>
            <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}%</span>
      </StatisticsSingl>  )}
      </StatisticsList> 
      </StatisticsBox>
  )  
}
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats:PropTypes.array.isRequired,
}