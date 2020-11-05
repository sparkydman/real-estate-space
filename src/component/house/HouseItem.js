import React from "react";
import PropTypes from "prop-types";

const HouseItem = (props) => {
  return (
    <div className="card">
      <div className="card__media">
        <img src="/bg-nav.jpg" alt="" />
        <span>
          <i className="fas fa-images"></i>
        </span>
      </div>
      <div className="card__body">
        <div className="card__header">
          <span className="property__createdAt">date</span>
          <span className="property__status">
            <i className="fas fa-tag"></i>
          </span>
        </div>
        <div className="card__description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            asperiores, incidunt nihil fuga adipisci porro quo sequi!
          </p>
        </div>

        <div className="card__actions">
          <p className="address">
            <span>
              <i className="fas fa-address-card "></i>
            </span>{" "}
            Lorem ipsum dolor sit amet.
          </p>
          <div className="card__footer">
            <span className="icon location">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span className="icon">
              <i className="fas fa-hand-holding-usd"></i> price
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

HouseItem.propTypes = {};

export default HouseItem;
