import styled from "styled-components";
export const StatisticsBox = styled.section` display:flex; flex-direction:column; align-items:center; background-color: #fff; margin-top: 20px; margin-bottom: 20px;`
export const StatisticsList = styled.ul`display:flex;`
export const StatisticsTitle = styled.h2` text-transform: uppercase; padding-top: 20px; padding-bottom: 20px;  color:  #817e7e;`
export const StatisticsSingl = styled.li`display: flex; flex-direction:column; justify-content:center; 
align-items:center; color: white; width: 60px; height: 60px;
background-color: ${({ value }) => {               
            switch (value) {
                case '.docx': return 'blue';
                case '.pdf': return 'fuchsia';
                case '.mp3': return 'red';
                case '.psd': return 'green';
            default: return 'lightgray' } } }`