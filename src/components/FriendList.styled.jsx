import styled from "styled-components";
export const StatusFriend = styled.span
            `
            display:inline-block; 
            height: 20px; width:20px;
            border-radius: 10px;
            background-color: ${({ value }) => {
    
            switch (value) {
                case true: return 'green';
                case false: return 'red';
                default: return 'lightgray'
                }
            }
            }`
export const  ItemFriend = styled.li` display: flex; justify-content:center; align-items:center;  background-color: white; margin-bottom: 10px; border-radius: 5px;`