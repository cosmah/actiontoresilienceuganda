import React, { useState, useEffect } from "react";
import "./Gallery.css";

import img1 from "../../assets/1.jpeg";
import img2 from "../../assets/2.jpeg";
import img3 from "../../assets/3.jpeg";
import img4 from "../../assets/4.jpeg";
import img5 from "../../assets/5.jpeg";
import img6 from "../../assets/6.jpeg";
import img7 from "../../assets/7.jpeg";
import img8 from "../../assets/8.jpeg";
import img9 from "../../assets/9.jpeg";
import img10 from "../../assets/10.jpeg";
import img11 from "../../assets/11.jpeg";
import img12 from "../../assets/12.jpeg";
import img13 from "../../assets/13.jpeg";
import img14 from "../../assets/14.jpeg";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadedImages = [
      img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14
    ];
    setImages(loadedImages);
    console.log(loadedImages); // Log the images array to check the paths
  }, []);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;