import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import Card from "../../../components/Card/Card.js";


import image1 from "../../../assets/img/bg.jpg";
import image2 from "../../../assets/img/bg2.jpg";
import image3 from "../../../assets/img/bg3.jpg";

import styles from "../../../assets/scss/plugins/_plugin-react-slick.scss";

const useStyles = makeStyles(styles);

function CarouselImage(props) {
  return (
    <div>
      <img 
        src={props.src} 
        alt="First slide" 
        className="slick-image" />
    </div>
    <button className="square" onClick={props.src}>
      {props.value}
    </button>
  );
}

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(require.context('../../../assets/img/images/Pics_Geometry', true, /\.(png|jpe?g|svg)$/));
  console.log(typeof(images));
  console.log(images.length);
  console.log(images[0].default);
  console.log(image1);
  return (
    <Card carousel>
      <Carousel {...settings}>
        <div>
          <img 
            src={images[0].default} 
            alt="First slide" 
            className="slick-image" />
        </div>
        <div>
          <img
            src={images[1].default}
            alt="Second slide"
            className="slick-image"
          />
        </div>
        <div>
          <img 
            src={images[2].default} 
            alt="Third slide" 
            className="slick-image" />
        </div>
      </Carousel>
    </Card>
  );
}