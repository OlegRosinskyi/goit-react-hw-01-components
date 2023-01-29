const Statistics = ({stats:{label,percentage,id}}) =>
{
    return (
     
    <li class="item">
            <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
    

    )
}
export default Statistics;