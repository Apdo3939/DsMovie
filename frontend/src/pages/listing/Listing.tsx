import MovieCard from "components/movieCard/MovieCard";
import Pagination from "components/pagination/Pagination";
import "./styles.css";

function Listing() {
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
