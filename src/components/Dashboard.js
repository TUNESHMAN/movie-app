import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import axios from "axios";
import ImageCard from "./ImageCard";
import ImageSearch from "./ImageSearch";

function Dashboard() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      )
      .then((response) => {
        console.log(response.data, "PHOTO RESPONSE");
        setImages(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        throw error;
      });
  }, [term]);
  return (
    <DashboardLayout>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && <h1>No Images Found</h1>}
      {isLoading ? (
        <h5>Loading...</h5>
      ) : (
        <div>
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}

export default Dashboard;
