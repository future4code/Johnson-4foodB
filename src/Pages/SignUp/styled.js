import styled from 'styled-components'
import { Box } from '@mui/system';

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
  justify-content: center;
  background-color: white;
  
`;

export const InputBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SubmitButton = styled.button`
  width: 20.5rem;
  height: 2.625rem;
  background-color: red;
  border: none;
  font-size: 1rem;
  margin-top:10px;
`