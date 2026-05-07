import Slider from 'react-slick';
import { useLocation } from 'react-router-dom';
import './background_slideshow.css'

const images = [
  '/images/background_2.jpg',
  '/images/background_1.jpg',
];

const BackgroundSlideshow = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <div className="slideshow-container">
      {/* Desktop: photo slideshow */}
      <div className="slideshow-slides">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt="" className="slide-image" />
              {!isHomePage && <div className="slide-overlay"></div>}
            </div>
          ))}
        </Slider>
      </div>

      {/* Mobile: animated gradient background */}
      <div className="mobile-bg">
        <div className="mobile-bg__orb mobile-bg__orb--1" />
        <div className="mobile-bg__orb mobile-bg__orb--2" />
        <div className="mobile-bg__orb mobile-bg__orb--3" />
        <div className="mobile-bg__orb mobile-bg__orb--4" />
        {!isHomePage && <div className="mobile-bg__overlay" />}
      </div>
    </div>
  );
};

export default BackgroundSlideshow;
