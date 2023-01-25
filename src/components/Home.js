import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";

const Home = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    fetch("https://assign-api.piton.com.tr/api/rest/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.category);
        categories.forEach((category) =>
          getAllProductsByCategoryId(category.id)
        );
      })
      .catch((err) => console.log(err));
  };

  const getAllProductsByCategoryId = (category_id) => {
    fetch("https://assign-api.piton.com.tr/api/rest/products/" + category_id)
      .then((res) => res.json())
      .then((data) => {
        const c = categories.find((category) => category.id === category_id);
        c.products = data.product;
        setCategories([...categories, c.products])
      }) 
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    getCategories();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    // outerWidth: 1320,
    // innerWidth: 1320
  };

  return (
    <>
      <Navbar />
      <div className="w-[1320px] mx-auto mt-10 rounded-lg">
        <Slider {...settings}>
          <div>
            <img
              className="w-full h-[300px] object-contain md:object-cover"
              src="assets/images/slider.png"
              alt="slider-1"
            />
          </div>
          <div>
            <img
              className="w-full h-[300px] object-cover"
              src="assets/images/slider.png"
              alt="slider-2"
            />
          </div>
          <div>
            <img
              className="w-full h-[300px] object-cover"
              src="assets/images/slider.png"
              alt="slider-3"
            />
          </div>
        </Slider>
      </div>

      {categories &&
        categories.map((item, index) => (
          <div key={index} className="mt-24 mx-auto container">
            <div className="container flex justify-between mb-2">
              <h2 className="font-semibold">{item.name}</h2>
              <h5 className="font-semibold text-formButton">View All</h5>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 xl:gap-7 mx-auto justify-center">
              {item.products &&
                item.products.map((product, productIndex) => (
                  <div
                    key={productIndex}
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
                          {product.name}
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
        ))}
    </>
  );
};

export default Home;
