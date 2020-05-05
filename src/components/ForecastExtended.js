import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForcastItem';
import transformForecast from './../services/transformForecast'
import './styles.css';

/* const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
];

const data = {
    temperature: 10,
    humidity: 10,
    WeatherState: 'normal',
    wind: 'normal',
} */

const api_key = "1198377a143dad1eef70be0b815e305d";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state  = { forecastData: null };
    }

    componentDidMount() {
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                this.setState({ forecastData })
            }
        );
    }

    renderForcastItemDays() {
        return <h1>Render items</h1>
/*         return days.map( day => (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>));
 */    }

    renderProgress = () => {
        return <h3>Cargando pronóstico extendido...</h3>
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecast-title">Pronóstico extendido para {city}</h2>
                {forecastData ? 
                    this.renderForcastItemDays() : 
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;