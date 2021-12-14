import React from "react";
import { useState } from "react";
import './Temperature.css';

const Temperature = () => {
    const [temperature, setTemperature] = useState(72)
    
    const increaseTemp = () => {
        setTemperature(temperature + 1);
    }

    const decreaseTemp = () => {
        setTemperature(temperature - 1)
    }

    let colorName;
    if (temperature >= 80) {
        colorName = 'red';
    } else if (temperature > 69 && temperature < 80) {
        colorName = 'orange';
    } else if (temperature > 59 && temperature < 70) {
        colorName = 'yellow';
    } else if (temperature > 49 && temperature < 60) {
        colorName = 'green';
    } else if (temperature <= 49) {
        colorName = 'teal';
    }

    return (
        <section>
            {/* <h2>Temperature</h2> */}
            <button className='incTempButton'onClick={increaseTemp}>+</button>
            <h1 className={colorName}>{temperature} °F</h1>
            <button className='decTempButton' onClick={decreaseTemp}>-</button>
        </section>
    );
}

export default Temperature;