import React from 'react';
import { TextField } from '@mui/material';
import { Background, InputBox, SubmitButton, Wrapper, Name, ReturnBox, Back } from "./styled";
import BackButton from '../../Images/back.png'
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../../Routes/coordinator';
import InputMask from 'react-input-mask'

const SignUp = () => {
    const history = useHistory()

    return (
        <Wrapper>

            <Background>
                <ReturnBox>
                    <Back onClick={() => goToLogin(history)} > <img src={BackButton} /> </Back>
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
                        label="Nome"
                        placeholder="Nome e Sobrenome"

                    />

                    <TextField
                        required
                        type='number'
                        id="outlined-required"
                        label="Email"
                        placeholder="email@email.com"
                        value=' '

                    />

                    <InputMask
                        mask="999.999.999-99"
                        disabled={false}
                    >
                        {() => <TextField
                            required
                            type='text'
                            id="filled-classic"
                            label="CPF"
                            placeholder="000.000.000-00"
                        />}
                    </InputMask>

                    <TextField
                        required
                        type='text'
                        id="outlined-required"
                        label="Senha"
                        placeholder="Mínimo 6 caracteres"

                    />
                    <TextField
                        required
                        type='text'
                        id="outlined-required"
                        label="Confirmar"
                        placeholder="Confirmar a senha anterior"

                    />

                </InputBox>
                <SubmitButton>Cadastrar</SubmitButton>

            </Background>
        </Wrapper>
    );
};

export default SignUp;