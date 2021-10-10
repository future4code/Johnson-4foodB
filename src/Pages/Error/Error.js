import React from 'react';
import styled from 'styled-components';


const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    
`



const Error = () => {
    return (
        <ErrorContainer>
            <h1>Error 404</h1>
        </ErrorContainer>
    );
};

export default Error;