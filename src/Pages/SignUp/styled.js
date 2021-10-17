import styled from 'styled-components'
import { Box } from '@mui/system';
import { primaryColor } from '../../constants/colors';


export const Wrapper = styled.div`
  height: 100vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  height: 100vh;
  width: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  
`;

export const Name = styled.h1`
  color:${primaryColor}
`

export const InputBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SubmitButton = styled.button`
  width: 20.5rem;
  height: 2.625rem;
  background-color: ${primaryColor};
  border: none;
  font-size: 1rem;
  margin-top:10px;
  cursor: pointer;


  :hover{
    cursor: pointer;
  }
`
export const ReturnBox = styled.button`
  border: solid;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-color: gray;
  background-color: transparent;
  border-width: 1px;
  height: 2.75rem;
  width: 100%;
  display: flex;
  align-items: center;
`
export const Back = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 20px;
  cursor: pointer;

`
