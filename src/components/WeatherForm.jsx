import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootswatch/dist/cyborg/bootstrap.min.css";


const WeatherForm = props => {
    return (
        <div className="card card-body">
            <form onSubmit={props.getWeather}>
                <div className="form-group">
                    <input type="text" name="city" placeholder="Your city Name" className="form-control" autoFocus />
                </div>
                <br />
                <div className="form-group">
                    <input type="text" name="country" placeholder="Your Country" className="form-control" />
                </div>
                <br />
                <button className="btn btn-success btn-block">Get Weather</button>
            </form>
        </div>
    )

}

export default WeatherForm;