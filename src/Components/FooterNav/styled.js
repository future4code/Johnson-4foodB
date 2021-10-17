import styled from 'styled-components'
//Import color
import {secundaryColor} from '../../constants/colors'

export const BottomNav = styled.div`
    width: 100vw;
    max-width: 420px;
    height: 60px;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #b8b8b8;
    margin-top: 64px;
    background-color: ${secundaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
` 