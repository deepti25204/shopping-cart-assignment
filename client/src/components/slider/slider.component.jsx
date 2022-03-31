import React, { useState } from "react";

import { 
  SlideshowContainer, 
  Slideshow,
  SlideshowImage, 
  SlideshowNavButton,
  SlideshowDot
} from './slider.styles';

const CustomSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderDot = () => {
    const items = (data || []).map((list, idx) => {
      if (list.order === idx + 1) {
        let dotActiveInactive = currentIndex === idx ? 'active' : 'inactive';
        return (
          <SlideshowDot 
            key={idx}
            classActiveInactive={dotActiveInactive}
            onClick={() => setCurrentIndex(currentIndex + 1)}>  
          </SlideshowDot>
        );
      } else {
        return null
      }
    });

    return items;
  };

  const imageSrc = (data || {}).length ? (data[currentIndex] || {}).bannerImageUrl : "";
  const imageAlt = (data || {}).length ? (data[currentIndex] || {}).bannerImageAlt : "Slider Picture";
  return (
    <SlideshowContainer>
      <div>
        <SlideshowImage src={imageSrc} alt={imageAlt} width="100%" height="25%"/>
        <Slideshow>{renderDot()}</Slideshow>
      </div>

      {
        currentIndex > 0 
        ? 
        <SlideshowNavButton onClick={() => setCurrentIndex(currentIndex - 1)}>
          &#10094;
        </SlideshowNavButton>
        : null
      }

      {
        (currentIndex < (data || {}).length - 1)
        ? 
        <SlideshowNavButton next onClick={() => setCurrentIndex(currentIndex + 1)}>
          &#10095;
        </SlideshowNavButton>
        : null
      }
      
    </SlideshowContainer>
  );
};

export default CustomSlider;