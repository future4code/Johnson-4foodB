import React from "react";
import { useHistory } from "react-router-dom";
//Estilização
import { BottomNav } from "./styled";
//Imports material-ui e icons
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
//Rotas
import {goToHome, goToCart, goToProfile} from '../../Routes/coordinator'

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

const FooterNav = () => {
  const history = useHistory();

  const classes = useStyles();

  return (
    <BottomNav>
      <BottomNavigation className={classes.root}>

        <BottomNavigationAction
        onClick={() => goToHome(history)}
          icon={<HomeIcon color="action" style={{ fontSize: 40 }} />}
        />

        <BottomNavigationAction
        onClick={() => goToCart(history)}
          icon={<ShoppingCartIcon color="action" style={{ fontSize: 40 }} />}
        />

        <BottomNavigationAction
        onClick={() => goToProfile(history)}

          icon={<PersonIcon color="action" style={{ fontSize: 40 }} />}
        />
      </BottomNavigation>
    </BottomNav>
  );
};

export default FooterNav;
