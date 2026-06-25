"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './Carousel.css';

interface CarouselItem {
  id: number;
  title: string;
  imageSrc: string;
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: "Kartar 4000 SV Combine Harvester",
    imageSrc: "https://cpimg.tistatic.com/09825146/b/4/Kartar-4000-SV-Combine-Harvester..jpg"
  },
  {
    id: 2,
    title: "Kartar Agriculture Rotavator",
    imageSrc: "https://cpimg.tistatic.com/09825151/b/4/Kartar-Agriculture-Rotavator..jpg"
  },
  {
    id: 3,
    title: "Kartar 3500 G Combine Harvester",
    imageSrc: "https://cpimg.tistatic.com/09825149/b/4/Kartar-3500-G-Combine-Harvester..jpg"
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {items.map((item, index) => {
          let position = 'next';
          if (index === currentIndex) {
            position = 'active';
          } else if (index === (currentIndex - 1 + items.length) % items.length) {
            position = 'prev';
          }

          return (
            <div key={item.id} className={`carousel-slide ${position}`}>
              <div className="carousel-image-wrapper">
                <Image 
                  src={item.imageSrc} 
                  alt={item.title} 
                  fill 
                  className="carousel-image"
                  unoptimized
                />
              </div>
              {position === 'active' && (
                <div className="carousel-caption">
                  {item.title}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
