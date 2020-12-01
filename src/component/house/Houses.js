import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import HouseItem from "./HouseItem";
import "./Houses.css";
import HouseContext from "../../context/houses/houseContext";
import Downshift from "downshift";

const overide = css`
  display: block;
  margin: 0 auto;
  border-color: #5dd95d;
`;

const Houses = () => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const houseContext = React.useContext(HouseContext);
  const [searchInput, setSearchInput] = React.useState("");

  const {
    getForSale,
    forSale,
    isLoading,
    getStates,
    usa_states,
  } = houseContext;

  React.useEffect(() => {
    getStates();
    getForSale();
  }, []);

  // const houseImage =
  //   process.env.NODE_ENV === "development"
  //     ? "http://localhost:3000/house.jpg"
  //     : "https://real-estate-space.herokuapp.com/house.jpg";

  React.useEffect(() => {
    getHouses();
  }, [offset, forSale]);

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

  const handInputChange = (input) => {
    setSearchInput(input);
  };

  const handleSubmit = () => {
    console.log(searchInput);
  };
  const handleFormsubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div
      className="houses"
      style={{ marginBottom: isLoading ? "30px" : "1150px" }}
      id="houses"
    >
      <header>
        <h1>Search for a home</h1>
        <Downshift
          onChange={(selection) => handInputChange(selection.city)}
          itemToString={(item) => (item ? item.city : "")}
          onInputValueChange={(value) => handInputChange(value)}
        >
          {({
            getInputProps,
            getItemProps,
            getMenuProps,
            isOpen,
            inputValue,
            getRootProps,
          }) => (
            <div className="search__container">
              <form onSubmit={handleFormsubmit}>
                <div
                  className="form__control"
                  {...getRootProps({}, { suppressRefError: true })}
                >
                  <input
                    {...getInputProps()}
                    placeholder="Search for a home in any USA cities"
                  />
                  <span className="search__icon">
                    <i className="fas fa-search"></i>
                  </span>
                </div>
                <button type="submit">search</button>
              </form>
              <ul {...getMenuProps()}>
                {isOpen
                  ? usa_states
                      .filter(
                        (item) => inputValue && item.city.includes(inputValue)
                      )
                      .map((item, index) => (
                        <li
                          key={`${item.city}-${index}`}
                          {...getItemProps({
                            index,
                            item,
                          })}
                        >
                          {item.city}
                        </li>
                      ))
                  : null}
              </ul>
            </div>
          )}
        </Downshift>

        {/* <form>
          <div className="form__control">
            <input type="text" name="search" placeholder="Search for a home" />
            <span className="search__icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <button type="submit">search</button>
        </form> */}
      </header>
      <div className="card__container">
        {isLoading ? (
          <div className="loader">
            <ClipLoader
              css={overide}
              size={100}
              color={"#5dd95d"}
              loading={isLoading}
            />
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Houses;
