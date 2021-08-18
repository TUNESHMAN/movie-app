import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

function ImageCard({ image }) {
  return (
    <Holder>
      <div className="top-div">
        <img
          src={image.urls.small}
          alt={image.alt_description}
          className="card"
        />
        <h5 className="description-header">{image.alt_description}</h5>
      </div>

      <div className="card-description">
        <FontAwesomeIcon icon={faHeart} className="heart-icon" />
        <FontAwesomeIcon icon={faThumbsDown} className="thumbs-down" />
      </div>
    </Holder>
  );
}

export default ImageCard;

const Holder = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 8px;
  margin-bottom: 25px;
  width: 30%;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 12px;
  }
  .top-div {
    height: 75%;
  }
  .card {
    width: 100%;
    height: 250px;
  }
  .card-description {
    margin-bottom: 30px;
    // padding: 2px 16px;
  }
  .heart-icon {
    background: red;
    color: white;
    padding: 20px;
    width: 20%;
    margin-right: 10px;
  }
  .thumbs-down {
    background: blue;
    color: white;
    padding: 20px;
    width: 20%;
  }
  .description-header {
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    font-weight: bold;
  }
`;
