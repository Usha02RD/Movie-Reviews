import React from 'react'
import Image from 'next/image'
import classes from './MovieDetail.module.css'

function MovieDetails(props) {
    return (
        <div className={classes.detailbox}>
            <div className={classes.imgbox}>
                <Image src={props.movie.image} alt="movie" width={400} height={200} />
            </div>
            <div className={classes.databox}>
                <h2>{props.movie.title}</h2>
                <p>{props.movie.description}</p>
            </div>
        </div>
    )
}

export default MovieDetails
