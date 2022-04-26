import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux'

const AnimeList=()=>{
    const animeList=useSelector(state=>state.animeList)
    return(
        <div className="container"> 
            <h1>My Anime List</h1>
            <table className="table table-striped">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>year</th>
                    <th>count</th>
                </tr>
                {animeList.length===0?<p>List is empty</p>:animeList.map(item=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.year}</td>
                        <td>{item.quantity}</td>
                    </tr>)}
            </table>
        </div>
    )
}
export default AnimeList;