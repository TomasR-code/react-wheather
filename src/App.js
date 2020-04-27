import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
    'Buenos Aires,ar',
    'Chile,cl',
    'Washington,us',
    'Ciudad de Mexico,mx',
    'Madrid,es',
]

class App extends Component {
    render() {
        return (
            <div className="App" >
                <LocationList cities={cities}></LocationList>
            </div>
        );
    }
}
export default App;