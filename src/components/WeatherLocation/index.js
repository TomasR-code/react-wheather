import React from 'react';
import Location from './Location';
import WeatherData from './../WeatherData';
import { SUN } from './../../constants/weather';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 95,
    wind: '10 m/s',
}

const WeatherLocation = () => (
    <div>
        <Location city ={"Buenos Aires"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);

export default WeatherLocation;