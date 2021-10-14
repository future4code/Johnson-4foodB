import React from 'react';
import { TextField } from '@mui/material';
import { Background, InputBox, SubmitButton, Wrapper, Name, ReturnBox, Back } from "./styled";
import BackButton from '../../Images/back.png'
import { useHistory } from 'react-router-dom';
import { goToLogin, goToSignUp } from '../../Routes/coordinator';

const SignUp = () => {
    const history = useHistory()

    return (
        <Wrapper>

            <Background>
                <ReturnBox>
                    <Back onClick={() => goToSignUp(history)} > <img src={BackButton} /> </Back>
                </ReturnBox>
                <Name>4Food</Name>
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
                        type='text'
                        id="outlined-required"
                        label="Logradouro"
                        placeholder="Rua / Av"

                    />

                    <TextField
                        required
                        type='number'
                        id="outlined-required"
                        label="Número"
                        placeholder="Número"

                    />

                    <TextField
                        required
                        type='text'
                        id="outlined-required"
                        label="Complemento"
                        placeholder="Apto. / Bloco"

                    />
                    <TextField
                        required
                        type='text'
                        id="outlined-required"
                        label="Bairro"
                        placeholder="Bairro"

                    />
                    <TextField
                        required
                        type='text'
                        id="outlined-required"
                        label="Cidade"
                        placeholder="Cidade"

                    />

                    <TextField
                        required
                        type='text'
                        id="outlined-required"
                        label="Estado"
                        placeholder="Cidade"

                    />
                </InputBox>
                <SubmitButton>Cadastrar</SubmitButton>

            </Background>
        </Wrapper>
    );
};

export default SignUp;