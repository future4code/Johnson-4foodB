import styled from "styled-components";
import { Box } from "@mui/system";
import { primaryColor } from "../../constants/colors";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: ${primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  animation-duration: 1s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`;

export const Name = styled.h1`
  color: red;
`;

export const LoginBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HidePassword = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 20.5rem;
  height: 2.625rem;
  background-color: ${primaryColor};
  border: none;
  font-size: 1rem;
  margin-top: 10px;
  cursor: pointer;
`;

export const SignUp = styled(SubmitButton)`
  margin-top: 10px;
  background-color: transparent;
  font-weight: bold;
`;
