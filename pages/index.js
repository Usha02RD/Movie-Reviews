import MovieList from "../components/movies/MovieList";
import MCard from "../components/ui/Mcard";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Fragment } from "react-is";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Movie Reviews</title>
      </Head>
      <div className={styles.container}>
        <h2>Welcome to Movie Reviews Web App</h2>
      </div>
    </Fragment>
  );
}
