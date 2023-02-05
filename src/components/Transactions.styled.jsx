import styled from "styled-components";

export const TrTable = styled.tr`color:  #817e7e; `
export const TdTabletHead = styled.th`border: 1px solid #e6e9ee; padding:0px; color:  grey; text-transform: capitalize;
background-color: ${( {value} ) => {
     switch (value) {
                case 0: return 'white';
               // case 0.5: return 'red';
                default: return '#e6e9ee'
                }
            }
            }`
      //  if (index === '0') return 'white';
      // else return 'grey'
                
          