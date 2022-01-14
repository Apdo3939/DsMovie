import axios from "axios";
import MovieCard from "components/movieCard/MovieCard";
import Pagination from "components/pagination/Pagination";
import { BASE_URL } from "utils/Utils";
import "./styles.css";

function Listing() {
  axios
    .get(`${BASE_URL}/movies?size=5`)
    .then((response) => {
      console.log(response.data);
    })
    .catch(() => {});

  return (
    <>
      <div className="dsmovie-listing-container">
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
