import React, { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import { Wrapper, Background, Name, LoginBox, SubmitButton, SignUp, HidePassword } from "./styled";
import { SplashScreen } from "../../Components/splashScreen";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import HiddenPassword from "../../Images/senha.png";
import VisiblePassword from "../../Images/senha-2.png";
import { goToHome, goToSignUp } from "../../Routes/coordinator";
import { useHistory } from "react-router";
import axios from "axios";

const Login = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [showPassword, setShowPassword] = useState("password");
  const [passwordImage, setPasswordImage] = useState(HiddenPassword);
  const [form, setForm] = useState({ email: "", password: "" });
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, []);

  const HideShowPassword = () => {
    const password = showPassword === "password" ? "text" : "password";
    const Image =
      passwordImage === HiddenPassword ? VisiblePassword : HiddenPassword;
    setShowPassword(password);
    setPasswordImage(Image);
  };

  const onChange = (prop) => (event) => {
    setForm({ ...form, [prop]: event.target.value });
  };

  const postLogin = async (event) => {
    event.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };
    const url = `${BASE_URL}login`;
    const header = "Content-Type: application/json";
    try {
      const response = await axios.post(url, body, header);
      localStorage.setItem("token", response.data.token);
      goToHome(history);
    } catch (error) {
      alert("ocorreu um erro");
    }
  };

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
                "& .MuiTextField-root": { m: 1, width: "20.5rem" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={postLogin}
            >
              <TextField
                color="primary"
                required
                type="email"
                id="outlined-required"
                label="Email"
                placeholder="email@email.com"
                onChange={onChange("email")}
              />

              <TextField
                required
                type={showPassword}
                id="outlined-required"
                label="Senha"
                placeholder="Mínimo de 6 caracteres"
                onChange={onChange("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <HidePassword type="button" onClick={HideShowPassword}>
                        <img src={passwordImage}></img>
                      </HidePassword>
                    </InputAdornment>
                  ),
                }}
              />

              <SubmitButton>Entrar</SubmitButton>
            </LoginBox>

            <SignUp onClick={() => goToSignUp(history)}>Não possui cadastro? Clique aqui</SignUp>
            
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
