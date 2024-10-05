import React from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("query");
  console.log(queryTerm)

  const {data:movies} = useFetch(apiPath, queryTerm);

  useDocumentTitle(`Search Result for ${queryTerm}`);
  
  return ( 
  <>
  <p className="pl-4 pt-20 mb-2 text-3xl text-gray-700 dark:text-white">{movies.length===0?`No Result Found for '${queryTerm}'`:`Results for '${queryTerm}'`}</p>
  <section className="grid grid-cols-4 gap-3 p-4 xsm:grid-cols-1 xsm:px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-items-center">
      {movies && movies.map((movie)=>(
        <Card movies={movie} key={movie.id}/>
      ))}
      </section>
  </>
  );
};
