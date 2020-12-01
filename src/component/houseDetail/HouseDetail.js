/* eslint-disable no-unused-vars */
import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import "./HouseDetail.css";
import HouseContext from "../../context/houses/houseContext";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Redirect } from "react-router-dom";

const overide = css`
  display: block;
  margin: 0 auto;
  border-color: #5dd95d;
`;

const houseDetail = ({ match }) => {
  const houseContext = React.useContext(HouseContext);
  const [property, setProperty] = React.useState(null);
  const [photoIndex, setPhotoIndex] = React.useState(null);
  const [isOpen, setOpen] = React.useState(false);
  const [images, setImages] = React.useState([]);
  const {
    currentProperty,
    getCurrentProperty,
    isLoading,
    error,
  } = houseContext;

  React.useEffect(() => {
    const id = match.params.id;
    if (currentProperty !== null) {
      setProperty(currentProperty);
    } else {
      getCurrentProperty(id);
    }
    if (property !== null) {
      const photos = currentProperty.photos.map((image) => image.href);
      setImages([...photos]);
    }
  }, [houseContext, currentProperty, property]);

  if (error) {
    return <Redirect to="/" />;
  }
  console.log(isLoading);

  return (
    <div>
      {isLoading ? (
        <div>
          <ClipLoader
            css={overide}
            size={50}
            color={"#5dd95d"}
            loading={isLoading}
          />
        </div>
      ) : (
        <div className="main__container">
          <div className="property__top">
            <div className="img__div" onClick={() => setOpen(true)}>
              <img src={images[0]} alt="" />
              <span>
                <i className="fas fa-images"></i>
                {property !== null && property.photo_count}
              </span>
              <span></span>
              {isOpen && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={
                    images[(photoIndex + images.length - 1) % images.length]
                  }
                  onCloseRequest={() => setOpen(false)}
                  onMovePrevRequest={() =>
                    setPhotoIndex(
                      (photoIndex + images.length - 1) % images.length
                    )
                  }
                  onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % images.length)
                  }
                />
              )}
            </div>
            <div className="info__container">
              {property !== null && <p>{property.description}</p>}
              <div className="address">
                {property !== null && (
                  <>
                    <h2>Address</h2>
                    <p>{`Address: ${property.address.line} ${property.address.city}, ${property.address.county}, ${property.address.state}`}</p>{" "}
                  </>
                )}
              </div>
              <div className="marketer">
                {property !== null && (
                  <>
                    <h2>Marketer</h2>
                    <p>{`Name: ${property.broker.name}`}</p>
                    <p>{`Phone: ${
                      property.broker.phone1
                        ? property.broker.phone1.number
                        : "None"
                    }`}</p>
                  </>
                )}
              </div>
              <div className="agents">
                <h2>Agents</h2>
                <ul>
                  {property !== null &&
                    property.agents.map((agent) => (
                      <li key={agent.id}>
                        <div>
                          <img
                            src={agent.photo.href}
                            alt=""
                            className="agent__avatar"
                          />
                          <p>{agent.name}</p>
                          <p>{agent.email}</p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="property__map">
              <div className="google__map"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default houseDetail;
