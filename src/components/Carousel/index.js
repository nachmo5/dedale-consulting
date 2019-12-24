import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../../common/images/image1.jpg";
import image2 from "../../common/images/image2.jpg";
import image3 from "../../common/images/image3.jpg";

const useStyles = makeStyles(theme => {
  return {
    root: {
      height: "100%"
    }
  };
});

const MyCarousel = props => {
  const { background } = props;
  const images = [image3, image1, image2];
  const c = useStyles();
  return (
    <div className={c.root} style={{ background }}>
      <Carousel showStatus={false} showThumbs={false} autoPlay>
        {images.map((image, i) => (
          <div key={i} className={c.slide}>
            <img alt="" src={image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
