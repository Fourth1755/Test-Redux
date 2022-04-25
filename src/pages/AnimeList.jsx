import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const AnimeList=()=>{
    const animeList=useSelector(state=>state.animeList)
    return(
        <div className="container"> 
            <table class="table table-striped">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>year</th>
                    <th>image</th>
                </tr>
                {animeList.length===0?<p>List is empty</p>:animeList.map(item=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.year}</td>
                        <td>{item.image}</td>
                    </tr>)}
            </table>
        </div>
    )
}
export default AnimeList;