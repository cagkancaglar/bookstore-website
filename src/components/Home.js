import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
    <div className="w-[1320px] mx-auto mt-10 rounded-lg">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="assets/images/slider.png"
            alt="slider-1"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="assets/images/slider.png"
            alt="slider-2"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="assets/images/slider.png"
            alt="slider-3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Home;
