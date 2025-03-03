import React from "react";
import { Helmet } from "react-helmet";
import MovieListing from "../components/movie-listing";

function MoviesPage() {
  return (
    <main>
      <Helmet>
        <title>Doggopedia</title>
      </Helmet>
      <MovieListing />
    </main>
  );
}

export default MoviesPage;
