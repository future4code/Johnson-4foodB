import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Background, InputBox, SubmitButton, Wrapper, Name, ReturnBox, Back } from "./styled";
import BackButton from '../../Images/back.png'
import { useHistory } from 'react-router-dom';
import { goToLogin, goToSignUp } from '../../Routes/coordinator';
import axios from 'axios';

const SignUp = () => {
    const history = useHistory()

    const [form, setForm] = useState({ logradouro: '', numero: '', complemento: '', bairro: '', cidade: '', estado: '' })

    const onChange = (prop) => (event) => {
        setForm({ ...form, [prop]: event.target.value })
    }


    const postAdress = async (event) => {
        event.preventDefault()
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/address'
        const body = {
            street: form.logradouro,
            number: form.numero,
            neighbourhood: form.bairro,
            city: form.cidade,
            state: form.estado,
            complement: form.complemento
        }

        try {
            const response = await axios.put(url, body, {
                headers:{
                    'auth':localStorage.getItem('authToken'),
                }
            })
            goToLogin(history)
        } catch (error) {
            alert('Ocorreu um erro')
        }
    }

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
                    onSubmit={postAdress}
                >

                    <TextField
                        required
                        type='text'
                        id="outlined-required"
                        label="Logradouro"
                        placeholder="Rua / Av"
                        onChange={onChange('logradouro')}

                    />

                    <TextField
                        required
                        type='number'
                        id="outlined-required"
                        label="Número"
                        placeholder="Número"
                        onChange={onChange('numero')}
                    />

                    <TextField
                        required
                        type='text'
                        id="outlined-required"
                        label="Complemento"
                        placeholder="Apto. / Bloco"
                        onChange={onChange('complemento')}
                    />
                    <TextField
                        required
                        type='text'
                        id="outlined-required"
                        label="Bairro"
                        placeholder="Bairro"
                        onChange={onChange('bairro')}
                    />
                    <TextField
                        required
                        type='text'
                        id="outlined-required"
                        label="Cidade"
                        placeholder="Cidade"
                        onChange={onChange('cidade')}
                    />

                    <TextField
                        required
                        type='text'
                        id="outlined-required"
                        label="Estado"
                        placeholder="Estado"
                        onChange={onChange('estado')}

                    />
                    <SubmitButton>Salvar</SubmitButton>

                </InputBox>

            </Background>
        </Wrapper>
    );
};

export default SignUp;