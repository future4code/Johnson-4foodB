import React from 'react';
import { TextField } from '@mui/material';
import { Background, InputBox, SubmitButton, Wrapper } from "./styled";

const SignUp = () => {

    return (
        <Wrapper>

            <Background>
                <h1>4Food</h1>
                <h3>Cadastrar</h3>
                <InputBox
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
                        type='text'
                        id="outlined-required"
                        label="Senha"
                        placeholder="Mínimo de 6 caracteres"

                    />

                    <TextField
                        required
                        type='email'
                        id="outlined-required"
                        label="Email"
                        placeholder="email@email.com"

                    />
                    <TextField
                        required
                        type='email'
                        id="outlined-required"
                        label="Email"
                        placeholder="email@email.com"

                    />
                    <TextField
                        required
                        type='email'
                        id="outlined-required"
                        label="Email"
                        placeholder="email@email.com"

                    />
                </InputBox>
                <SubmitButton>Cadastrar</SubmitButton>

            </Background>
        </Wrapper>
    );
};

export default SignUp;