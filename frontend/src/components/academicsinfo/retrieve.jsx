import React, { useState, useEffect } from "react";

const ImageGallery = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState({});
  const formDataId = "650c34a61e4829f7080142de"; // Replace with the actual MongoDB document ID

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/academic-form/${formDataId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          const imageData = result.data;

          // Set the images from Cloudinary
          setImages(imageData);
        } else {
          console.error("Failed to fetch images");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [formDataId]);

  return (
    <div>
      <h2>Image Gallery</h2>
      {loading ? (
        <p>Loading images...</p>
      ) : (
        <div className="image-container">
          {Object.keys(images).map((key, index) => (
            <div key={index}>
              <p>{key}</p>
              <img
                src={images[key]}
                alt={`Image ${index}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
