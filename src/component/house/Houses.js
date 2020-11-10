/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import HouseItem from "./HouseItem";
import "./Houses.css";
import HouseContext from "../../context/houses/houseContext";

const Houses = () => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const houseContext = React.useContext(HouseContext);

  // eslint-disable-next-line no-unused-vars
  const { getForSale, forSale, isLoading } = houseContext;

  React.useEffect(() => {
    getForSale();
  }, []);
  // console.log(forSale);
  const houseImage =
    "http://localhost:3000/house.jpg" ||
    "https://real-estate-space.herokuapp.com/house.jpg";

  const getHouses = () => {
    const postData = forSale
      .slice(offset, offset + perPage)
      .map((property, i) => <HouseItem key={i} property={property} />);
    setData(postData);
    setPageCount(Math.ceil(forSale.length / perPage));
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  React.useEffect(() => {
    getHouses();
  }, [offset]);

  return (
    <div className="houses">
      <header style={{ backgroundImage: `url(${houseImage})` }}>
        <h1>Search for a home</h1>
        <form>
          <div className="form__control">
            <input type="text" name="search" placeholder="Search for a home" />
            <span className="search__icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <button type="submit">search</button>
        </form>
      </header>
      <div className="card__container">
        {data}
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default Houses;
