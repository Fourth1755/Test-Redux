import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Signin from "./pages/Signin"
import AnimeList from "./pages/AnimeList"
import Anime from "./pages/Anime"
import HomePage from "./pages/HomePage";
import {Switch,Route } from "react-router-dom";
import {useSelector} from "react-redux"
const UnAuthApp=()=>{
  return(
      <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/signin" exact component={Signin}/>
          <Route path="/anime" exact component={Anime}/>
      </Switch>
  )
}
const AuthApp=()=>{
  return(
    <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/signin" exact component={Signin}/>
        <Route path="/animeList" exact component={AnimeList}/>
        <Route path="/anime" exact component={Anime}/>
    </Switch>
)
}
const App=()=> {
  const {user} =useSelector((state)=>state.auth)
  return (
    <div>
        <Navbar/>
        {!user?<UnAuthApp/>:<AuthApp/>}
    </div>
  );
}

export default App
