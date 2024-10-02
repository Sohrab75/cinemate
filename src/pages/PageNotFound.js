import React from "react";
import pageNotFoundImg from "../assets/page-not-found/pagenotfoundimg.jpg";
import { Link } from "react-router-dom";
import { Button } from "../components";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const PageNotFound = ({title}) => {
  useDocumentTitle(title)
  return (
    <>
      <section className="flex flex-col justify-center px-2 pt-14 pb-10">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl dark:text-white mb-2">404, Oops!</p>
          <img
            className="object-cover w-80 h-80"
            src={pageNotFoundImg}
            alt="page not found"
          />
        </div>
        <div className="flex justify-center">
          <Link to={"/"}>
            <Button>
              Go To Home
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};
