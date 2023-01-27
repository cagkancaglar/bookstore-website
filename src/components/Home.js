// router
import { Link } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// components
import Navbar from "../components/Navbar";
import Image from "./ui/Image"
// helmet
import { Helmet } from "react-helmet";


const Home = () => {

  const data = useSelector((state) => state.category.products);

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
    <>
      <Helmet>
        <title>Home - PITON</title>
      </Helmet>
      <Navbar />
      <div className="xl:w-[1320px] xl:h-[400px] mx-10 xl:mx-auto mt-10 rounded-lg relative">
        <div className="absolute text-white font-extrabold z-10 text-3xl lg:text-[56px] leading-[20px] lg:leading-[46px] left-[60px] top-1/2 transform -translate-y-1/2">
          <h2 className="text-sliderText">25% discount</h2> <br />
          <h2 className="text-[color:white]">all Paulo Coelho</h2> <br />
          <h2 className="text-[color:white]">books!</h2>
        </div>
        <Slider {...settings}>
          <div>
            <img
              className="w-full lg:h-[400px] object-contain lg:object-cover"
              src="assets/images/slider.png"
              alt="slider-1"
            />
          </div>
          <div>
            <img
              className="w-full lg:h-[400px] object-contain lg:object-cover"
              src="assets/images/slider.png"
              alt="slider-2"
            />
          </div>
          <div>
            <img
              className="w-full lg:h-[400px] object-contain lg:object-cover"
              src="assets/images/slider.png"
              alt="slider-3"
            />
          </div>
        </Slider>
      </div>

      {data &&
        data.map((item, index) => (
          <div key={index} className="mt-24 mx-auto container">
            <div className="container flex justify-between items-center mb-5 px-5 md:px-0">
              <Link
                to={`/category/${item.id}`}
                className="font-bold text-[32px]"
              >
                {item.name}
              </Link>
              <Link
                to={`/category/${item.id}`}
                className="font-semibold text-formButton text-xl"
              >
                View All
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 xl:gap-7 mx-auto justify-center">
              {item.products &&
                item.products.map((product, productIndex) => (
                  <Link
                    to={`/category/${item.id}/${product.id}`}
                    key={productIndex}
                    className="flex w-[320px] h-[200px] bg-formInputBackground rounded-md"
                  >
                    <div className="flex items-center">
                    <Image source={product.cover} customClass="w-[120px] h-[180px] rounded-sm my-auto"/>
                    </div>
                    <div className="flex flex-col justify-between h-[180px] ml-5">
                      <div className="card-header mt-5">
                        <h5 className="text-formText font-semibold">
                          {product.name}
                        </h5>
                        <span className="text-sm font-semibold opacity-60">
                          {product.author}
                        </span>
                      </div>
                      <div className="card-price">
                        <span className="font-semibold text-formRegister text-lg">
                          {product.price} $
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default Home;
