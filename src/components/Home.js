import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productsData from "../mock/products.json";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

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
      <div className="w-[1320px] mx-auto mt-10 rounded-lg">
        <Slider {...settings}>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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

      <div className="mt-24 ml-14 mr-10 container">
        <div className="container flex justify-between mb-2">
          <h2 className="font-semibold">Best Seller</h2>
          <h5 className="font-semibold text-formButton">View All</h5>
        </div>

        <div className="grid grid-cols-4 gap-x-7">
          {products &&
            products.map((product, index) => (
              <div
                key={index}
                className="flex w-[320px] h-[200px] bg-formInputBackground rounded-md"
              >
                <div className="flex items-center">
                  <img
                    src="assets/images/dune.png"
                    alt=""
                    className="w-[120px] h-[180px] rounded-sm my-auto"
                  />
                </div>
                <div className="flex flex-col justify-between h-[180px] ml-5">
                  <div className="card-header mt-5">
                    <h5 className="text-formText font-semibold">
                      {product.title}
                    </h5>
                    <span className="text-sm font-semibold opacity-60">
                      {product.author}
                    </span>
                  </div>
                  <div className="card-price">
                    <span className="font-semibold text-formRegister text-lg">
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
