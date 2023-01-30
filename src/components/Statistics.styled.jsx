import styled from "styled-components";
export const StatisticsSingl = styled.li`display: flex; flex-direction:column; justify-content:center; align-items:center; color: white; width: 60px;
      height: 60px;
background-color: ${({ value }) => {
               
            switch (value) {
                case '.docx': return 'blue';
                case '.pdf': return 'fuchsia';
                case '.mp3': return 'red';
                case '.psd': return 'green';
            default: return 'lightgray'
            }
        
        }
    }`