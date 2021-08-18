import React from "react";

function ImageCard({ image }) {
  return (
    <div>
      {" "}
      <img src={image.urls.small} alt={image.alt_description} />
      <h5>{image.alt_description}</h5>
    </div>
  );
}

export default ImageCard;