import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm) => {
  const [data, setData] = useState([]);

  const url = queryTerm
    ? `https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1&query=${queryTerm}`
    : `https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1`;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    };
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [url]); // 'options' and 'url' already include 'queryTerm'

  return { data };
};
