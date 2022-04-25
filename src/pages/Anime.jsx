import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import animeData from '../data/db.json'
import ItemAnime from "../component/ItemAnime";
const Anime=()=>{
    return(
        <div className="container">
            {animeData.map(anime=>
                <ItemAnime key={anime.id} anime={anime}/>)}
        </div>
    );
}
export default Anime;