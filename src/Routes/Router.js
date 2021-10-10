import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/*Páginas*/
import SignUp from "../Pages/SignUp/SignUp";
import Address from "../Pages/Address/Address";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import Restaurant from "../Pages/Restaurant/Restaurant";
import Profile from "../Pages/Profile/Profile";
import Error from "../Pages/Error/Error";


export default function Router() {
  return (
    <BrowserRouter>
      
        <Switch>
          <Route exact path={"/"}>
            <Login />
          </Route>

          <Route exact path={"/cadastro"}>
            <SignUp />
          </Route>

          <Route exact path={"/cadastro/endereco"}>
            <Address />
          </Route>

          <Route exact path={"/home"}>
            <Home />
          </Route>

          <Route exact path={"/restaurante/:id"}>
            <Restaurant />
          </Route>

          <Route exact path={"/carrinho"}>
            <Cart />
          </Route>

          <Route exact path={"/perfil"}>
            <Profile />
          </Route>

          <Route>
            <Error />
          </Route>
        </Switch>
      
    </BrowserRouter>
  );
}
