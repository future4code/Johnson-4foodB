import React from 'react';
import { TextField } from '@mui/material';
import { Background, InputBox, SubmitButton, Wrapper, Name, ReturnBox, Back } from "./styled";
import BackButton from '../../Images/back.png'
import { useHistory } from 'react-router-dom';
import { goToAddress, goToLogin } from '../../Routes/coordinator';
import InputMask from 'react-input-mask'
import { useState } from 'react';
import {BASE_URL} from '../../constants/urls'
import axios from 'axios';

const SignUp = () => {
    const history = useHistory()
    const [form, setForm] = useState({ name: '', email: '', cpf: '', password: '' })

    const onChange = (prop) => (event) => {
        setForm({ ...form, [prop]: event.target.value })
        console.log(form.cpf)
    }



    const postSignUp = async (event) => {
        event.preventDefault()
        const url = `${BASE_URL}/signup`
        const body = {
            name: form.name,
            email: form.email,
            cpf: form.cpf,
            password: form.password
        }
        const header = 'Content-Type: application/json'
        try {
            const response = await axios.post(url, body, header)
            console.log(response)
            goToAddress(history)
            localStorage.setItem('authToken', response.data.token)


        } catch (error) {
            alert('Ocorreu um erro')
            console.log(error)
        }
    }
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
                    onSubmit={postSignUp}
                >

                    <TextField
                        required
                        type='text'
                        id="outlined-required"
                        label="Nome"
                        placeholder="Nome e Sobrenome"
                        value={form.name}
                        onChange={onChange('name')}

                    />

                    <TextField
                        required
                        type='email'
                        id="outlined-required"
                        label="Email"
                        placeholder="email@email.com"
                        value={form.email}
                        onChange={onChange('email')}
                    />

                    <InputMask
                        mask="999.999.999-99"
                        disabled={false}
                        value={form.cpf}
                        onChange={onChange('cpf')}
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
                        value={form.password}
                        onChange={onChange('password')}
                    />
                    <TextField
                        required
                        type='text'
                        id="outlined-required"
                        label="Confirmar"
                        placeholder="Confirmar a senha anterior"

                    />
                    <SubmitButton >Criar</SubmitButton>

                </InputBox>

            </Background>
        </Wrapper>
    );
};

export default SignUp;