import React from "react";
import { useHistory } from "react-router-dom";
import { goToRestaurant } from "../../Routes/coordinator";
import { CardContainer, CardImage, CardInfo, Info } from "./styled";
//import Image from "../../assets/img/image.png"

const RestaurantCard = (props) => {
  const history = useHistory();
  return (
  
    //onClick={() => goToRestaurant(history, props.id)}
    <CardContainer imgUrl={props.image.props.src}>
      <CardInfo>
        <h3>{props.name}</h3>
        <Info>
          <p>{`${props.deliveryTime - 10} - ${props.deliveryTime}`} min</p>
          <p>
            Frete{" "}
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(props.shipping)}
          </p>
        </Info>
      </CardInfo>
    </CardContainer>
  );
};

export default RestaurantCard;
