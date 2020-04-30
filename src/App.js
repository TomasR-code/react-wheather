import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'; /* realse para que muestre sombras */
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
    'Buenos Aires,ar',
    'Chile,cl',
    'Washington,us',
    'Ciudad de Mexico,mx',
    'Madrid,es',
]


class App extends Component {

    handleSelectedLocation = city => {
        console.log(`handleSelectedLocation ${city}`);
    }
    render() {
        return (
            <Grid>
                <Row>
                    <AppBar position='sticky'>
                        <ToolBar>
                            <Typography variante='title' color='inherit'>
                                Weather App
                            </Typography>
                        </ToolBar>
                    </AppBar>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <LocationList
                            cities={cities}
                            onSelectedLocation={this.handleSelectedLocation}>
                        </LocationList>
                    </Col>
                    <Col xs={12} md={6}>
                        <Paper zDepth={4}>
                            <div className="detail">
                                <ForecastExtended></ForecastExtended>
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default App;