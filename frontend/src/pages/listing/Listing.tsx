import axios from "axios";
import MovieCard from "components/movieCard/MovieCard";
import Pagination from "components/pagination/Pagination";
import { useEffect, useState } from "react";
import { BASE_URL, MoviePage } from "utils/Utils";
import "./styles.css";

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 10,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=5&page=${pageNumber}&sort=id`)
      .then((response) => {
        const data = response.data as MoviePage;
        setPage(data);
        setPageNumber(data.number);
      })
      .catch(() => {});
  }, [pageNumber]);

  return (
    <>
      <div className="dsmovie-listing-container">
        <Pagination />
      </div>
      <div className="container">
        <div className="row">
          {page.content.map((item) => (
            <div
              className="col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-2"
              key={item.id}
            >
              <MovieCard movie={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Listing;
