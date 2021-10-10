import styled from "styled-components";

export const ContainerPage = styled.div`
  min-width: 400px;
  max-width: 900px;
  height: 100vh;
  background-color: #e8222e;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: sans-serif;
`;

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

