import Pagination from "components/pagination/Pagination";
import "./styles.css";

function Listing() {
  return (
    <>
      <div className="dsmovie-listing-container">
        <Pagination />
      </div>

      <h1>Listing</h1>
    </>
  );
}
export default Listing;
