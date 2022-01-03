import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({ title, fetchUrl }) {
    // A state is maintained to keep track of movies
    // Use State takes in an initial argument, here it is an empty array
    // Use State returns the current state and a function that can be used to set the state
    const [movies, setMovies] = useState([]);

    // useEffect is use to do something after the render, will be called later, after performing DOM updates
    // By default it runs after every render and update
    // [] says run once when the row loads, no dependencies, will not run again

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request
        }
        fetchData();
    }, []);
    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Row;
