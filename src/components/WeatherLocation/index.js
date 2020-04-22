import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import transformWeather from './../../services/tranformWeather';
import { api_weather } from './../../constants/api_utl';
import Location from './Location';
import WeatherData from './../WeatherData';
import { SUN } from './../../constants/weather';

const data = {
    temperature: 10,
    weatherState: SUN,
    humidity: 95,
    wind: '10 m/s',
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: null,
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            });

        });
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ?
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress size={50}></CircularProgress>
                }
            </div>
        );
    }
}

export default WeatherLocation;