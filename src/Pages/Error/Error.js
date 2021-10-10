import React from 'react';
import styled from 'styled-components';


const ErrorContainer = styled.div`
  min-width: 400px;
  max-width: 900px;
  height: 100vh;
  background-color: #e8222e;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: sans-serif;


    
    
`



const Error = () => {
    return (
        <ErrorContainer>
            <h2>Página não encontrada :(</h2>
            
        </ErrorContainer>
    );
};

export default Error;