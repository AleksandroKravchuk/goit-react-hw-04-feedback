import styled from 'styled-components';
export const Button = styled.button`
  font-size: 25px;
  text-transform: capitalize;
  text-align: center;
  color: palevioletred;
  padding: 15px;
  border-radius: 10px
  margin-right:30px;
 cursor: pointer;
 border:none;
 background-color: #cdc9c9;
  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
 &:hover {
    box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);}
`
