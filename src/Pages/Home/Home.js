import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
//Components
import RestaurantCard from "../../Components/RestaurantCard/RestaurantCard";
//Constants
import { BASE_URL } from "../../constants/urls";
//Estilização
import { ContainerPage } from "./styled";
import FooterNav from "../../Components/FooterNav/FooterNav";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        window.alert(err.message);
      });
  };


  let {id} = useParams()


  const history = useHistory()
  const changeToDetails = (id) => {
      history.push(`/restaurante/${id}`)
     


    }


    return (
      <>
    
      <ContainerPage>


        {restaurants.map((item) => {
          return (
            <button onClick={() => changeToDetails(item.id)}>
             <RestaurantCard 
              key={item.id}
              id={item.id}
              name={item.name}
              deliveryTime={item.deliveryTime}
              shipping={item.shipping}
              image={<img src={item.logoUrl} alt="logo restaurante" />}
            />
            </button>
          );
        })}
      </ContainerPage>
      <FooterNav />
    </>
  );
};

export default Home;
