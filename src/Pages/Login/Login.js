import React, { useEffect } from "react";
import { useState } from "react";

//Estilização
import styled from 'styled-components'
import {ContainerPage, Wrapper, Background, Name  } from './styled'

//Componentes
import { SplashScreen } from "../../Components/splashScreen";

//Material UI
import TextField from "@mui/material/TextField";


const Input = styled(TextField)`
  margin-bottom: 20px;
`;


const Login = () => {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 3000);
  }, []);

  const Render = () => {
    switch (showing) {
      case false:
        return <SplashScreen />;
      case true:
        return (
          <Background>
            <Name>4Food</Name>
            <p>Entrar</p>

            <Input
              required
              id="outlined-required"
              label="Required"
              defaultValue="email@email.com"
            />

            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
          </Background>
        );
    }
  };

  return (
    <>
      <Wrapper>{Render()}</Wrapper>
    </>
  );
};

export default Login;