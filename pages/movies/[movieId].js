import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import MovieDetails from "../../components/movies/MovieDetails";

function MovieDetail(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.movie.title}</title>
      </Head>
      <div>
        <h1>Movie Detail Page</h1>
        <MovieDetails movie={props.movie} />
      </div>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/all-movies");
  const data = await response.json();

  return {
    fallback: false,
    paths: data.movies.map((movie) => ({
      params: {
        movieId: movie._id,
      },
    })),
  };
}

export async function getStaticProps(context) {
  const id = context.params.movieId;
  const response = await fetch("http://localhost:3000/api/get-movie", {
    method: "POST",
    body: JSON.stringify({ id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const movieData = await response.json();
  console.log(movieData.movie);

  return {
    props: {
      movie: movieData.movie,
    },
  };
}

export default MovieDetail;
