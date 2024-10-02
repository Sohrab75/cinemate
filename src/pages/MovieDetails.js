import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bkpImage from "../assets/image/bkp_images.jpg";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const params = useParams();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDI1MmVjZjQzNDM5NGYyMjQ0NzgyMTQ0MWE4MDJhZSIsIm5iZiI6MTcyNzU3OTUxNy40OTI4Nywic3ViIjoiNjZmOGMyZGMyYzRiZGM5ZGIwNWY1NTJjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Zi-5NQ0qJDuc7E192Dqo6glwA9hP7CKyoYcWy6PUQYY",
    },
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
        options
      );
      const json = await response.json();
      setMovieData(json);
      console.log(json);
    };
    fetchMovie();
  }, []);

  useDocumentTitle(movieData.title);

  const image = movieData.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
    : bkpImage;
  return (
    <>
      <section className="flex justify-center gap-10 flex-wrap pt-28 pb-12">
        <div className="max-w-sm">
          <img className="rounded w-80 object-cover" src={image} alt={movieData.title} />
        </div>
        <div className="max-w-2xl text-gray-700 dark:text-white sm:pl-6">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {movieData.title}
          </h1>
          <p className="my-4">{movieData.overview}</p>
          {movieData.genres ? (
            <p className="flex gap-2 flex-wrap">
              {movieData.genres.map((item, index) => (
                <span
                  className="p-2 border border-gray-200 rounded dark:border-gray-600"
                  key={index}
                >
                  {item.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center py-4">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm text-gray-900 dark:text-white">
              {movieData.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span
              className="text-gray-900 dark:text-white"
            >
              {movieData.vote_count} reviews
            </span>
          </div>
          <div className="my-4 flex flex-col gap-2">
            <p>
              <span className="mr-2 font-bold">Runtime: </span>
              <span className="">{movieData.runtime} min.</span>
            </p>
            <p>
              <span className="mr-2 font-bold">Budget: </span>
              <span className="">{movieData.budget}</span>
            </p>
            <p>
              <span className="mr-2 font-bold">Revenue: </span>
              <span className="">{movieData.revenue}</span>
            </p>
            <p>
              <span className="mr-2 font-bold">Release Date: </span>
              <span className="">{movieData.release_date}</span>
            </p>
            <p>
              <span className="mr-2 font-bold">IMDB Code: </span>
              <a href={`https://www.imdb.com/title/${movieData.imdb_id}`} className="" target="_blank" rel="noreferrer">{movieData.imdb_id}</a>
            </p>

          </div>
        </div>
      </section>
    </>
  );
};
