import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './../WeatherData';
import { SUN } from './../../constants/weather';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 95,
    wind: '10 m/s',
}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Madrid',
            data: data,
            
        };
    }

    handleUpdateClick = () => {
        console.log("actualizado");
    }

    render() {
        return (
        <div className="weatherLocationCont">
            <Location city={"Buenos Aires"}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={ this.handleUpdateClick }>Actualizar</button>
        </div>
        );
    }
}

export default WeatherLocation;