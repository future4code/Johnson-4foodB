import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { primaryColor } from '../constants/colors'

const Wrapper = styled.div`
    height: 100vh;
`

const Background = styled.div`
    height: 100vh;
    width: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${primaryColor};
 
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
            <Background  >
                <Name>4Food</Name>
            </Background>
        </Wrapper>
    )
}