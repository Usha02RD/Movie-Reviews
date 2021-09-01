import Head from "next/head";
import { Fragment } from "react";
import MovieList from "../../components/movies/MovieList";

function AllMovies(props) {
  return (
    <Fragment>
      <Head>
        <title>All Movies</title>
      </Head>
      <div>
        <h2>All Movies</h2>
        <MovieList movies={props.movies} />
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/all-movies");
  const data = await response.json();
  return {
    props: {
      movies: data.movies,
    },
    revalidate: 1,
  };
}

export default AllMovies;
