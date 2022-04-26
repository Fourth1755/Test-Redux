import React, { useState, useEffect } from "react";
import {useDispatch} from 'react-redux'
import { addToList } from "../actions/animeListActions";
const ItemAnime =({anime})=>{
    const dispatch=useDispatch()
    return(
        <div className="card" style={{width: '14rem',margin: '20px'}}>
            <img className="card-img-top" src={anime.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{anime.name}</h5>
                <p className="card-text">{anime.year}</p>
                <button onClick={()=>dispatch(addToList({...anime,quantity:1}))} className="btn btn-primary">Add to list</button>
            </div>
        </div>
    );
}
export default ItemAnime