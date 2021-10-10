import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { SplashScreen } from '../Components/splashScreen'
import TextField from '@mui/material/TextField'

const Wrapper = styled.div`
    height: 100vh;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Background = styled.div`
    height: 100vh;
    width: 100vh;
    display: flex;
    flex-direction:column;
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
`

const Name = styled.h1`
    color: red;
`

const Input = styled(TextField)`
    margin-bottom: 20px;
`

export const Login = () => {
    const [showing, setShowing] = useState(false)

    useEffect(() => {
        setTimeout(() => { setShowing(true) }, 3000)
    }, [])


    const Render = () => {
        switch (showing) {
            case false:
                return (<SplashScreen />)
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
                )
        }
    }


    return (
        <>
            <Wrapper>

                {Render()}
            </Wrapper>
        </>
    )

}