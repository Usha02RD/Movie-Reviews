import NewMovie from "../components/movies/NewMovie";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

function AddMovie() {
  const router = useRouter();

  const addMovieHandler = async (mData) => {
    console.log(mData);
    const response = await fetch("/api/add-movie", {
      method: "POST",
      body: JSON.stringify(mData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/movies");
  };
  return (
    <Fragment>
      <Head>
        <title>Add Movie</title>
      </Head>
      <div>
        <NewMovie onAddMovie={addMovieHandler} />
      </div>
    </Fragment>
  );
}

export default AddMovie;
