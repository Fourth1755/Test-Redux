import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
const Navbar=()=>{
    const animeList =useSelector((state)=>state.animeList)

    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                        <a class="navbar-brand" href="#">Navbar</a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to='/' class="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/animeList' class="nav-link">Anime List<span>{animeList.reduce((sum,item)=>sum+1,0)}</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/anime' class="nav-link">Anime</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/signin' class="nav-link">Sign in</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar