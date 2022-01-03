import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
    // A state is maintained to keep track of movies
    // Use State takes in an initial argument, here it is an empty array
    // Use State returns the current state and a function that can be used to set the state
    const [movies, setMovies] = useState([]);

    // useEffect is use to do something after the render, will be called later, after performing DOM updates
    // By default it runs after every render and update
    // [] says run once when the row loads, no dependencies, will not run again
    // everytime the dependencies change, useEffect is run [dependencies]
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request
        }
        fetchData();
    }, [fetchUrl]);
    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row_posters'>
                {/* Several row posters */}

                {/* Curly braces indicate it is JS and not a string */}
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                    alt={movie.name}></img>
                ))}
            </div>
        </div>
    )
}

export default Row;
