import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import axios from "axios";
import ImageCard from "./ImageCard";
import ImageSearch from "./ImageSearch";
import styled from "styled-components";

function Dashboard() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const filteredImage = images.filter((image) =>
    image?.alt_description?.toLowerCase().includes(term)
  );
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      )
      .then((response) => {
        setImages(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        throw error;
      });
  }, []);
  return (
    <DashboardLayout>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && <h1>No Images Found</h1>}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ImageContainer>
          {filteredImage.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </ImageContainer>
      )}
    </DashboardLayout>
  );
}

export default Dashboard;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 70px;
`;
