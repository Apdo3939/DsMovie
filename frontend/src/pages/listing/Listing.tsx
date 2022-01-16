import axios from "axios";
import MovieCard from "components/movieCard/MovieCard";
import Pagination from "components/pagination/Pagination";
import { useEffect, useState } from "react";
import { BASE_URL, MoviePage } from "utils/Utils";
import "./styles.css";

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=5&page=0`)
      .then((response) => {
        const data = response.data as MoviePage;
        setPageNumber(data.number);
        console.log(response.data);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <div className="dsmovie-listing-container">
        <p>{pageNumber}</p>
        <Pagination />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-2">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-2">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-2">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-2">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-2">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-2">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-2">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-2">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}
export default Listing;
