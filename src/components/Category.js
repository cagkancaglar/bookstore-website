// react
import { useEffect, useState } from "react";
// router
import { Link, useParams } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
// components
import Navbar from "./Navbar";
// services
import GetImage from "../helpers/imageUrl";
// helmet
import { Helmet } from "react-helmet";


const Category = () => {

  const { category_id } = useParams();
  const prod = useSelector((state) => state.category.products);
  const data = prod.find((item) => item.id === Number(category_id));
  const [url, setUrl] = useState("");

  useEffect(() => {
    getUrl();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getUrl() {

    setUrl([await GetImage()]);
  }

  return (
    <>
      <Helmet>
        <title>Category - PITON</title>
      </Helmet>
      <Navbar />
      <div className="mt-10 mx-auto container">
        <div className="container mb-8">
          <Link to="/home" className="font-bold text-2xl">
            {`< ${data?.name}`}
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  mx-auto justify-center">
          {data?.products?.map((product, index) => (
            <Link to={`/category/${data?.id}/${product.id}`}>
              <div
                key={index}
                className="w-[300px] h-[433px] bg-formInputBackground rounded-md"
              >
                <div className="flex justify-center">
                  <img
                    src={url}
                    alt=""
                    className="w-[200px] h-[300px] rounded-sm pt-5"
                  />
                </div>
                <div className="flex justify-between mx-5">
                  <div className="card-header mt-7">
                    <h5 className="text-formText font-semibold">
                      {product.name}
                    </h5>
                    <span className="text-sm font-semibold opacity-60">
                      {product.author}
                    </span>
                  </div>
                  <div className="card-price flex flex-col justify-end">
                    <span className="font-semibold text-formRegister text-lg">
                      {product.price} $
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
