import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100vh;
`

const Background = styled.div`
    height: 100vh;
    width: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    /* animation-duration: 1s;
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
    } */
`

const Name = styled.h1`
    color: white;
    animation: fadeIn linear 1.5s;
    
  

  @keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

`

export const SplashScreen = () => {
    const [showing, setShowing] = useState(true)


    return (
        <Wrapper>
            <Background showing={showing} >
                <Name>4Food</Name>
            </Background>
        </Wrapper>
    )
}