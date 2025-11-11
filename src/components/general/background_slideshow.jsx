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
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt="" className="slide-image" />
            {!isHomePage && <div className="slide-overlay"></div>}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BackgroundSlideshow;
