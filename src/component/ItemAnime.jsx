import React, { useState, useEffect } from "react";
import {useDispatch} from 'react-redux'
import { addToList } from "../actions/animeListActions";
const ItemAnime =({anime})=>{
    const dispatch=useDispatch()
    return(
        <div>
            <h2>{anime.name}</h2>
            <p>{anime.year}</p>
            <button onClick={()=>dispatch(addToList({...anime,quantity:1}))}>Add to list</button>
        </div>
    );
}
export default ItemAnime