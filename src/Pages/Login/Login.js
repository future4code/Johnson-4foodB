import React, { useEffect } from "react";
import { useState } from "react";
import styled from 'styled-components'
import { Wrapper, Background, Name, LoginBox, SubmitButton, SignUp, HidePassword, BackgroundName } from './styled'
import { SplashScreen } from "../../Components/splashScreen";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import HiddenPassword from '../../Images/senha.png'
import VisiblePassword from '../../Images/senha-2.png'
import { Button } from "@mui/material";
import { goToSignUp } from "../../Routes/coordinator";
import { useHistory } from "react-router";



const Login = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [showPassword, setShowPassword] = useState('password')
  const [passwordImage, setPasswordImage] = useState(HiddenPassword)
  const history = useHistory()


  useEffect(() => {
    setTimeout(() => { setShowSplashScreen(false); }, 3000);
  }, []);

  const HideShowPassword = () => {
    const password = showPassword === 'password' ? 'text' : 'password'
    const Image = passwordImage === HiddenPassword ? VisiblePassword : HiddenPassword
    setShowPassword(password)
    setPasswordImage(Image)
  }

  const Render = () => {
    switch (showSplashScreen) {
      case true:
        return <SplashScreen />;
      case false:
        return (
          <Background>
            <Name>4Food</Name>
            <h3>Entrar</h3>

            <LoginBox
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '20.5rem', },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                type='email'
                id="outlined-required"
                label="Email"
                placeholder="email@email.com"

              />

              <TextField
                required
                type={showPassword}
                id="outlined-required"
                label="Senha"
                placeholder="Mínimo de 6 caracteres"
                InputProps={{
                  endAdornment: <InputAdornment position="end"><HidePassword type='button' onClick={HideShowPassword} ><img src={passwordImage} ></img></HidePassword></InputAdornment>,
                }}
              />

              <SubmitButton>Entrar</SubmitButton>
            </LoginBox>
            <SignUp onClick={() => goToSignUp(history)} >Não possui cadastro? Clique aqui.</SignUp>
          </Background>
        );
    }
  };

  return (
    <>
      <Wrapper>

        {Render()}
      </Wrapper>
    </>
  );
};

export default Login;