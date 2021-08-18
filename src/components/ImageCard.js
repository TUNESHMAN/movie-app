import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";

function ImageCard({ image }) {
  return (
    <Holder>
      {" "}
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="card"
      />
      <h5>{image.alt_description}</h5>
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faHeart} />
    </Holder>
  );
}

export default ImageCard;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  .card {
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: center;
    background-color: #f1f1f1;
    height: 170px;
  }
`;
