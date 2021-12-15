import React from "react";

import {
  GallaryContainer,
  GallaryHeader,
  GallaryRows,
  GallaryFirstRow,
  GallatyImgContainer,
  GallaryImg,

} from "./GalleryElements";

import img1 from "./../../images/Gallaryimg1.jpg";
import img2 from "./../../images/Gallaryimg2.jpg";
import img3 from "./../../images/Gallaryimg3.jpg";
import img5 from "./../../images/Gallaryimg5.jpg";
import img6 from "./../../images/Gallaryimg6.jpg";
import img7 from "./../../images/Gallaryimg7.jpg";

const Gallary = () => {
  return (
    <GallaryContainer>
        <GallaryHeader>Gallery</GallaryHeader>
      <GallaryRows>
        <GallaryFirstRow>
          <GallatyImgContainer data-aos="flip-right">
            <GallaryImg src={img1} />
          </GallatyImgContainer>
          <GallatyImgContainer data-aos="flip-right">
            <GallaryImg src={img2} />
          </GallatyImgContainer>
          <GallatyImgContainer data-aos="flip-right">
            <GallaryImg src={img3} />
          </GallatyImgContainer>
         
        </GallaryFirstRow>

        <GallaryFirstRow>
          <GallatyImgContainer data-aos="flip-right">
            <GallaryImg src={img5} />
          </GallatyImgContainer>
          <GallatyImgContainer data-aos="flip-right">
            <GallaryImg src={img6} />
          </GallatyImgContainer>
          <GallatyImgContainer data-aos="flip-right">
            <GallaryImg src={img7} />
          </GallatyImgContainer>
          
        </GallaryFirstRow>
      </GallaryRows>
    </GallaryContainer>
  );
};

export default Gallary;