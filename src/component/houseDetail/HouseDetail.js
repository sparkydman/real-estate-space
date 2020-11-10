import React from "react";
import "./HouseDetail.css";
import HouseContext from "../../context/houses/houseContext";

const houseDetail = ({ match }) => {
  const houseContext = React.useContext(HouseContext);
  const { currentProperty, getCurrentProperty } = houseContext;

  React.useEffect(() => {
    const id = match.params.id;
    getCurrentProperty(id);
  }, []);
  //   console.log(currentProperty.address.line);
  return (
    <div>
      <div className="main__container">
        <div className="property__top">
          <div className="img__div">
            {/* display all the house images with react-lightbox */}
          </div>
          <div className="info__container">
            {/* display information about the property */}
            <p>{currentProperty.description}</p>
            <div className="address">
              <h2>Address</h2>
              <p>{`Address: ${currentProperty.address.line} ${currentProperty.address.city}, ${currentProperty.address.county}, ${currentProperty.address.state}`}</p>
            </div>
            <div className="marketer">
              <h2>Marketer</h2>
              <p>{`Name: ${currentProperty.broker.name}`}</p>
              <p>{`Phone: ${currentProperty.broker.phone1.number}`}</p>
            </div>
            <div className="agents">
              <h2>Agents</h2>
              <ul>
                {currentProperty.agents.map((agent) => (
                  <li key={agent.id}>
                    <div>
                      <img src={agent.photo.href} alt="" />
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
    </div>
  );
};

export default houseDetail;
