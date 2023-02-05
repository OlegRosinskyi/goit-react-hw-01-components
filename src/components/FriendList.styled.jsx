import styled from "styled-components";
export const StatusFriend = styled.span
            `margin-left: 5px; margin-right: 5px;
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
    export const  ImgFriend = styled.img`border-radius: 5px; background-color: #dec8c8; margin-top: 5px; margin-bottom: 5px;`
export const  TextFriend = styled.p`margin-left: 5px;  `          
export const ItemFriend = styled.li` display: flex; justify-content:flex-start; align-items:center;  background-color: white;
 margin-bottom: 10px; border-radius: 5px; width: 240px;box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);`