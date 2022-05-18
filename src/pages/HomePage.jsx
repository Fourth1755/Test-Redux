import React from 'react'
import HighchartsAnime from '../component/Highcharts'
import {useSelector,useDispatch} from 'react-redux'
import animeData from '../data/db.json'
const HomePage = () =>{
    const animeList=useSelector(state=>state.animeList)
    return(
        <div className="container">
            <h1>Home Page</h1>
            <HighchartsAnime
                data={animeData}
            />
        </div>
    )
}
export default HomePage