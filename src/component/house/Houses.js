import React from "react";
import HouseItem from "./HouseItem";
import "./Houses.css";

const Houses = () => {
  const houseImage = "http://localhost:3000/house.jpg";
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <HouseItem key={item} />
        ))}
        <div className="nav__button">
          <span>
            <i className="fas fa-angle-left"></i>
          </span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>
            <i className="fas fa-ellipsis-h"></i>
          </span>
          <span>
            <i className="fas fa-angle-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Houses;
