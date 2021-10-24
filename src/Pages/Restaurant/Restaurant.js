import React, { useContext , useEffect, useState} from "react";
import { useHistory, useParams} from "react-router";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";

//Estilização
import { ContainerPage } from "./styled";

const Restaurant = () => {

  const {id} = useParams()
  
  useEffect(() => {
   console.log(id);
  
axios.get 
(
  `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/${id}`,  {
   
  headers: {
      auth: localStorage.getItem("token"),
    },
  })
  
.then((res)=>{
  console.log(res.data);
})


  }, [])


//estado da pagina estado useState passa irformao pro then 
  return (
    <ContainerPage>
    </ContainerPage>
  );
};

export default Restaurant;
