import { useState, useEffect } from "react";
import productsData from "../mock/products.json";
import Navbar from "../components/Navbar";

const Categories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-10 mx-auto container">
        <div className="container mb-2">
          <h2 className="font-semibold"> {`< Best Seller`}</h2>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-10">
            {products &&
              products.map((product, index) => (
                <div
                  key={index}
                  className="flex w-[300px] h-[433px] bg-formInputBackground rounded-md flex-col"
                >
                  <div className="flex justify-center">
                    <img
                      src="assets/images/dune.png"
                      alt=""
                      className="w-[200px] h-[300px] rounded-sm pt-5"
                    />
                  </div>
                  <div className="flex justify-between mx-5">
                    <div className="card-header mt-7">
                      <h5 className="text-formText font-semibold">
                        {product.title}
                      </h5>
                      <span className="text-sm font-semibold opacity-60">
                        {product.author}
                      </span>
                    </div>
                    <div className="card-price flex flex-col justify-end">
                      <span className="font-semibold text-formRegister text-lg">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
