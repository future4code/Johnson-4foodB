import React from 'react';

//Estilização
import {ContainerPage} from './styled'

//Rotas
import FooterNav from "../../Components/FooterNav/FooterNav";



const Profile = () => {
    return (
        <ContainerPage>
            <h1>Perfil</h1>
            <FooterNav/>
        </ContainerPage>
    );
};

export default Profile;