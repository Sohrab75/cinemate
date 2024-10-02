import React from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  useDocumentTitle(title);
  return (
    <>
      <section className="grid grid-cols-4 px-24 pt-28  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-items-center gap-3 p-4">
        {movies &&
          movies.map((movie) => <Card movies={movie} key={movie.id} />)}
      </section>
    </>
  );
};
