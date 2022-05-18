import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import configObj from "../utils/configObj"

const HomePage = () =>{
    return(
        <div className="container">
            <h1>Home Page</h1>
            <HighchartsReact
                highcharts={Highcharts}
                options={configObj}
            />
        </div>
    )
}
export default HomePage