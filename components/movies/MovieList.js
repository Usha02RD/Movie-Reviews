import React from 'react'
import MovieItem from './MovieItem'
import classes from './MovieList.module.css'

function MovieList(props) {
    return (
        <div className={classes.movielist}>
            {props.movies.map((movie)=> <MovieItem key={movie._id} movie={movie} />)}
        </div>
    )
}

export default MovieList
